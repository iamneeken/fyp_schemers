from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from django.contrib.auth.models import User
from base.serializer import ProductSerializer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs): #took this code from official jwt github repo
        data= super().validate(attrs)
       
        serializer = UserSerializerWithToken(self.user).data

        for key, value in serializer.items():
            data[key] = value

        return data   


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data

    try:
        user = User.objects.create_user(
            first_name= data['name'],
            username= data['email'],
            email= data['email'],
            password= make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'This email already exists'}    
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False) #False makes return only one user
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True) # many= True only returns every items.
    return Response(serializer.data)
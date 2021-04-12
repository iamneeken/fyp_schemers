from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

# from .productsList import products
from productmanagement.models import Product
from base.serializer import ProductSerializer


#This function shows what routes we have and what our api is going to look
@api_view(http_method_names=['GET'])
# @permission_classes((permissions.AllowAny,))
def getRoutes(request):

    routes = [

        'api/products/',
        'api/products/create/',
        'api/products/upload/',
        
        'api/products/top/',

        'api/products/<id>/',
        'api/products/<id>/reviews/',
        'api/products/delete/<id>/',
        'api/products/update/<id>/',
    ]

    return Response(routes) 



@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True) # many= True only returns every items.
    return Response(serializer.data)



@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False) # many= False only returns one item.

    return Response(serializer.data)
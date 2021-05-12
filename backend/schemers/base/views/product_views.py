from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

# from .productsList import products
from productmanagement.models import Product
from reviews.models import Review
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
        
        'api/users/login/',
    ]

    return Response(routes) 



@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    print('query: ', query )
    if query == None:
        query = ''
    products = Product.objects.filter(name__icontains=query) #For search feature
    products = Product.objects.filter(category__icontains=query) #For search feature
    serializer = ProductSerializer(products, many=True) # many= True only returns every items.
    return Response(serializer.data)



@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False) # many= False only returns one item.

    return Response(serializer.data)

@api_view(['POST'])  
@permission_classes([IsAuthenticated])  # Change this to IsAuthenticated
def createProductReview(request,pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    #Scenario - Review already exists  
    alreadyExists = product.review_set.filter(user=user).exists()

    if alreadyExists:
        content = {'detail': 'Product already reviewd'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    #Scenario - No rating or 0
    elif data['rating'] == 0:
        content={"detail": 'Please select a rating'}
        return Response(content, status= status.HTTP_400_BAD_REQUEST)

    #Scenario - Create review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['review'],
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0 
        for i in reviews:
            total += i.rating
        
        product.rating = total / len(reviews)
        product.save()
        return Response(" Review was added")
            

from django.db import models
from django.contrib.auth.models import User
from productmanagement.models import *
# Create your models here.

class Review(models.Model):
    _id= models.AutoField(primary_key=True, editable=False)
    product= models.ForeignKey(Product, on_delete=models.SET_NULL, null=True) 
    user= models.ForeignKey(User, on_delete=models.SET_NULL, null=True) 
    name= models.CharField(max_length=200, null=True, blank=True)
    rating= models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    comment= models.TextField(null=True, blank=True)
    createdAt= models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.rating)


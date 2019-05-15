from django.contrib import admin
from api_app.models import Category, Product, Order, Comment
from django.contrib.auth.models import User

# Register your models here.

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Comment)
admin.site.register(Order)

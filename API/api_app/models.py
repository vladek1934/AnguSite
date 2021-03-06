from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


class OrderManager(models.Manager):
    def for_user(self, user):
        return self.filter(created_by=user)


class Category(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=400)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Product(models.Model):
    name = models.CharField(max_length=150)
    price = models.IntegerField()
    file = models.FileField(blank=False, null=False)
    description = models.CharField(max_length=400)
    count = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')


class Comment(models.Model):
    text = models.CharField(max_length=350)
    rating = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE, default=None)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=None)


class Order(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    objects = OrderManager()
    product = models.ForeignKey(Product, on_delete=models.CASCADE, default=None)

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

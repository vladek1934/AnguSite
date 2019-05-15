from rest_framework import serializers
from api_app.models import Category, Product, Comment, Order
from django.contrib.auth.models import User


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    description = serializers.CharField(required=True)

    def create(self, validated_data):
        category = Category(**validated_data)
        category.save()
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)


class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    category = CategorySerializer()                         # alternative
    #category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'count', 'category')    # there was 'category_id' before


class OrderSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    date = serializers.DateTimeField()
    name = serializers.CharField()
    created_by = UserSerializer(read_only=True)
    products = ProductSerializer(many=True)

    # products = serializers.StringRelatedField(many=True)
    # products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ('id', 'name', 'created_by', 'date')


class CommentSerializer(serializers.Serializer):
    text = serializers.CharField(max_length=350)
    rating = serializers.IntegerField()
    product = ProductSerializer(many=True)
    created_by = UserSerializer(read_only=True)

    def create(self, validated_data):
        comment = Comment(**validated_data)
        comment.save()
        return comment

    def update(self, instance, validated_data):
        instance.text = validated_data.get('text', instance.text)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.save()
        return instance

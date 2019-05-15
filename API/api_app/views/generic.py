from rest_framework import generics
from rest_framework.parsers import FileUploadParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from api_app.models import Order, Product, User
from api_app.serializers import OrderSerializer, ProductSerializer, UserSerializer2, OrderSerializer2


class OrderList(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Order.objects.for_user(self.request.user)

class OrderCreate(generics.CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class ProductList(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)
    parser_class = (FileUploadParser,)

    def get_queryset(self):
        return Product.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class UserRegister(generics.CreateAPIView):
    serializer_class = UserSerializer2
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return User.objects.all()

    def perform_create(self, serializer):
        serializer.save()

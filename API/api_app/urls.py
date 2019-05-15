from django.urls import path, re_path
from api_app import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('categories/', views.CategoryList.as_view()),
    path('categories/<str:catName>/', views.category_products),
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    path('orders/<int:pk>/', views.OrderDetail.as_view()),
    path('orders/', views.ProductList.as_view()),
    path('users/', views.UserList.as_view()),
    path('login/', views.login),
    path('logout/', views.logout)

]

if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# AnguSite
A Website project (shop). Built with Angular and Django REST API

## Contributors
Vladislav Mun and
Dmitriy Tuchashvili

## Idea
Creation of scalable and easily customizable online store. The client will have the ability to browse the goods, sort them, place an order and rate the item after the purchase (on a 5-star scale). The admin panel will be provided, so that the management of the sellables can be done without a strong IT expertise. The payment system will not probably be included in here, since the purchases can be made by cash. 

## Main parts
1)A product page, which can be managed by the administrator
2)A system of authorization 
3)About page
4)Main page with top products
5)A page with classifications (a particular type of clothing, each with its own page). 
Made by the request of a real person in need of this site, with the  plans of getting this into the full-time use.

1. Minimum 4 models - Category, Product, Order, Comment
2. Minimum 1 model Manager CategoryManager
3. Minimum 2 relations between models (ForeignKey) Product(has category); Comment(has product); Category(created_by user)
4. Serializer
a. at least 2 from serializer.Serializer
b. at least 2 serializer from serializer.ModelSerializer
5. Views
a. at least 2 FBV drf view
b. at least 2 CBV APIView
c. at least 2 generic CBV
6. Token based authentication
a. login
b. logout
c. views with permission AllowAll
d. views with permission IsAuthenticated
7. At least for 1 model CRUD operations
a. create objects with authenticated user (Ex: Tasks for current
authenticated user)
8. Postman requests with all implemented methods
9. Welcome page for api project using Django templates
Front End
1. All needed interfaces for APIs from back-end
2. All needed service for getting data from API
3. Minimum 4 (onclick) events, which hits API
4. Minimum 4 [(ngModel)]
5. Token based authentication
a. interceptor
b. login
c. logout
6. Styling using any of: css, less, scss

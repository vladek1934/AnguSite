from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    context = {
        'name': 'User 1',
        'nums': [i for i in range(5)],
        'is_logged_in': False,
        'product': {
            'id': 1,
            'name': 'Product 1'
        },
        'products': [{
            'id': i,
            'name': 'Product {}'.format(i)
        } for i in range(5)]
    }
    return render(request, 'main.html', context)


def about(request):
    return render(request, 'about.html')


def show_product(request, pk):
    return HttpResponse('<h1>{}</h1>'.format(pk))
from django.shortcuts import render
import os

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def about(request):
    return render(request, 'core/about.html')

def errorPage(request, exception):
    return render(request, 'core/404.html', status=404)
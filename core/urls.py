from django.urls import path
from .views import home, about, errorPage

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
]

handler404 = errorPage
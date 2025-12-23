from django.urls import path

from .views import home, about, errorPage, contact, session, faq


urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),

    path('contact/', contact, name='contact'),
    path('session/', session, name='session'),
    path('faq/', faq, name='faq'),


]

handler404 = errorPage


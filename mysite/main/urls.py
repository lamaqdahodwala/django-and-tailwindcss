from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('rickroll', views.not_a_rickroll, name='rickroll')
]
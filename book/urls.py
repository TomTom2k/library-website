from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.getBooks),
    path('events/', views.getEvents),

    path('tags/', views.getTags),
    path('book/<int:pk>/', views.getBook)
]

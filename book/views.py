from operator import imod
from re import M
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializer import BookSerializer, TagSerializer, EventSerializer
from .models import Book, Tag, Event

# Create your views here.


@api_view(['GET'])
def getBooks(request):
    if request.method == 'GET':
        books = Book.objects.filter(active=True)
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def getBook(request, pk):
    if request.method == 'GET':
        book = Book.objects.get(id=pk)
        serializer = BookSerializer(book, many=False)
        return Response(serializer.data)


@api_view(['GET'])
def getTags(request):
    if request.method == 'GET':
        tags = Tag.objects.all()
        serializer = TagSerializer(tags, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def getEvents(request):
    if request.method == 'GET':
        Events = Event.objects.filter(active=True)
        serializer = EventSerializer(Events, many=True)
        return Response(serializer.data)

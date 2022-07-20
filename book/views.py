from operator import imod
from re import M
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializer import BookSerializer, TagSerializer
from .models import Book, Tag

# Create your views here.


@api_view(['GET'])
def getBooks(request):
    if request.method == 'GET':
        books = Book.objects.all()
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

from rest_framework.serializers import ModelSerializer
from .models import Book, Tag


class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'


class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

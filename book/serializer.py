from rest_framework.serializers import ModelSerializer
from .models import Book, Tag, Event


class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'


class TagSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

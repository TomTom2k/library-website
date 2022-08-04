from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from user.models import User
from colorfield.fields import ColorField


# Create your models here.

class Book(models.Model):
    class Meta:
        ordering = ['active', 'views', 'title']

    title = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    views = models.IntegerField(default=0, editable=False)
    describe = models.TextField(null=True, blank=True)
    rate = models.FloatField(
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)], default=5.0)
    tags = models.ManyToManyField('Tag', default="9")
    author = models.ForeignKey(User, default="2",
                               on_delete=models.CASCADE)

    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Tag(models.Model):

    title = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.title


class Event(models.Model):
    class Meta:
        ordering = ['active', 'start_time']
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    start_time = models.DateTimeField(
        ("Thời gian bắt đầu"), auto_now=False, auto_now_add=False)
    end_time = models.DateTimeField(
        ("Thời gian bắt đầu"), auto_now=False, auto_now_add=False)

    color1 = ColorField("Màu 1", help_text=(
        "Màu chính cho sự kiện"
    ), max_length=8)
    color2 = ColorField("Màu 2", help_text=(
        "Màu chính cho sự kiện, đậm hơn màu 1"
    ), max_length=8)

    active = models.BooleanField(default=True)

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from user.models import User


# Create your models here.

class Book(models.Model):
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

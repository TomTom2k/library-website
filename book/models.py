from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    describe = models.TextField(null=True, blank=True)
    rate = models.FloatField(
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)], default=5.0)
    tags = models.ManyToManyField('Tag', default=None)

    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Tag(models.Model):
    title = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.title

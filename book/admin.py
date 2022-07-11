import imp
from django.contrib import admin
from book.models import Book, Tag


class BookAdmin(admin.ModelAdmin):
    list_display = ["title", "active", "created_date"]


# Register your models here.
admin.site.register(Book)
admin.site.register(Tag)

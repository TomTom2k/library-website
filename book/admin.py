import imp
from django.contrib import admin
from book.models import Book, Tag


class BookAdmin(admin.ModelAdmin):
    list_display = ["title", 'views', 'author', "active", "created_date"]


# Register your models here.
admin.site.register(Book, BookAdmin)
admin.site.register(Tag)

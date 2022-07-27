import imp
from django.contrib import admin
from book.models import Book, Tag, Event


class BookAdmin(admin.ModelAdmin):
    list_display = ["title", 'views', 'author', "active", "created_date"]


class EventAdmin(admin.ModelAdmin):
    list_display = ["book", 'start_time',
                    'end_time', "color1", "color2", 'active']


# Register your models here.
admin.site.register(Book, BookAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Tag)

from django.contrib import admin
from user.models import User


class UserAmin(admin.ModelAdmin):
    fields = ('username', 'password', 'email',
              'is_author', 'date_joined')
    list_display = ["username"]

# Register your models here.


admin.site.register(User, UserAmin)

from django.contrib import admin
from user.models import User


class UserAmin(admin.ModelAdmin):
    list_display = ["username"]

# Register your models here.


admin.site.register(User, UserAmin)

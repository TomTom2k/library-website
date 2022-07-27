from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    username = models.CharField(
        ("username"),
        max_length=150,
        unique=True,
        help_text=(
            "Yêu cầu. 150 ký tự trở xuống. Chỉ các chữ cái, chữ số và @ /. / + / - / _."
        ),
        error_messages={
            "unique": ("Người dùng này đã tồn tại"),
        },
    )
    email = models.EmailField(("email"), unique=True)
    is_author = models.BooleanField(verbose_name=('Tác giả'), default=False)
    is_staff = models.BooleanField(
        ("Nhân viên"),
        default=False,
        help_text=(
            "Xem người dùng này có thể vào trang quản lý hay không"),
    )

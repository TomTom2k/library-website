# Generated by Django 4.0.6 on 2022-07-27 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0003_event'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='end_time',
            field=models.DateTimeField(verbose_name='Thời gian bắt đầu'),
        ),
        migrations.AlterField(
            model_name='event',
            name='start_time',
            field=models.DateTimeField(verbose_name='Thời gian bắt đầu'),
        ),
    ]

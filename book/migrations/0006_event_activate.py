# Generated by Django 4.0.6 on 2022-07-27 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0005_alter_event_color1_alter_event_color2'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='activate',
            field=models.BooleanField(default=True),
        ),
    ]
# Generated by Django 3.1 on 2020-09-26 19:19

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('ProfileSMedia', '0003_profileuser_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='profileuser',
            name='timestamp',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]

# Generated by Django 3.1 on 2021-07-06 22:17

import ProfileSMedia.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProfileSMedia', '0054_auto_20210703_1329'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileuser',
            name='profile_image',
            field=models.FileField(default='default/face_img/1.svg', upload_to=ProfileSMedia.models.upload_path),
        ),
    ]
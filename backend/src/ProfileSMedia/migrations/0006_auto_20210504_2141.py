# Generated by Django 3.1 on 2021-05-04 20:41

import ProfileSMedia.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProfileSMedia', '0005_auto_20210418_1638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileuser',
            name='profile_image',
            field=models.FileField(default='default/face_img/2.svg', upload_to=ProfileSMedia.models.upload_path),
        ),
    ]

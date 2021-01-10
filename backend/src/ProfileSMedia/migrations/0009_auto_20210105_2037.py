# Generated by Django 3.1 on 2021-01-05 20:37

import ProfileSMedia.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProfileSMedia', '0008_profileuser_background_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileuser',
            name='background_profile_image',
            field=models.FileField(default='default/background_img/background_img.png', upload_to=ProfileSMedia.models.upload_path_background),
        ),
        migrations.AlterField(
            model_name='profileuser',
            name='profile_image',
            field=models.FileField(default='default/face_img/1.svg', upload_to=ProfileSMedia.models.upload_path),
        ),
    ]
# Generated by Django 3.1 on 2021-05-09 13:51

import ProfileSMedia.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProfileSMedia', '0002_auto_20210508_1153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileuser',
            name='profile_image',
            field=models.FileField(default='default/face_img/1.svg', upload_to=ProfileSMedia.models.upload_path),
        ),
    ]

# Generated by Django 3.1 on 2021-02-04 17:58

import ProfileSMedia.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProfileSMedia', '0011_auto_20210118_2013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileuser',
            name='profile_image',
            field=models.FileField(default='default/face_img/2.svg', upload_to=ProfileSMedia.models.upload_path),
        ),
    ]

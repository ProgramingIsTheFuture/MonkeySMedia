# Generated by Django 3.1 on 2020-10-17 18:52

import ProfileSMedia.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProfileSMedia', '0007_auto_20201016_2236'),
    ]

    operations = [
        migrations.AddField(
            model_name='profileuser',
            name='background_profile_image',
            field=models.FileField(default='default/MonkeySMediaSystem.png', upload_to=ProfileSMedia.models.upload_path_background),
        ),
    ]

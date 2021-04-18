# Generated by Django 3.1 on 2021-04-08 21:10

import ProfileSMedia.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FollowRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProfileUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profile_image', models.FileField(default='default/face_img/1.svg', upload_to=ProfileSMedia.models.upload_path)),
                ('background_profile_image', models.FileField(default='default/background_img/background_img.png', upload_to=ProfileSMedia.models.upload_path_background)),
                ('description', models.TextField(default='', max_length=150)),
                ('timestamp', models.DateField(auto_now_add=True)),
                ('followers', models.ManyToManyField(blank=True, related_name='follower', through='ProfileSMedia.FollowRelation', to=settings.AUTH_USER_MODEL)),
                ('following', models.ManyToManyField(blank=True, related_name='following', to=settings.AUTH_USER_MODEL)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='followrelation',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ProfileSMedia.profileuser'),
        ),
        migrations.AddField(
            model_name='followrelation',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]

# Generated by Django 3.1 on 2021-02-04 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ChatSMedia', '0002_remove_thread_thread_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='thread',
            name='thread_type',
            field=models.CharField(choices=[('personal', 'Personal'), ('group', 'Group')], default='group', max_length=15),
        ),
    ]
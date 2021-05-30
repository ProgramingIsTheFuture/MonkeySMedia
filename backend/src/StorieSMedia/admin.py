from django.contrib import admin

from .models import Stories, UserStories

admin.site.register(UserStories)
admin.site.register(Stories)

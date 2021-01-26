from django.contrib import admin

from .models import TrackingModel, Thread, Message

admin.site.register(Thread)
admin.site.register(Message)


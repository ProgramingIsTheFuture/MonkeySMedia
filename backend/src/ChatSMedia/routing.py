from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path('ws/chat/<str:username>/', consumers.ChatConsumer.as_asgi()),
    path('ws/video-chat/<str:username>/', consumers.VideoChatConsumer.as_asgi()),
    path('ws/notification/', consumers.ChatNotificationConsumer.as_asgi()),
]

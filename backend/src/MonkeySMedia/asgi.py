"""
ASGI config for MonkeySMedia project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

from channels.routing import ProtocolTypeRouter, URLRouter

from channels.auth import AuthMiddlewareStack

from .jwt_auth_socket import TokenAuthMiddleware
import ChatSMedia.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'MonkeySMedia.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        TokenAuthMiddleware(
            URLRouter(
                ChatSMedia.routing.websocket_urlpatterns
            )
        )
    ),
})

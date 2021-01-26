from django.db import close_old_connections
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from urllib.parse import parse_qs
from asgiref.sync import sync_to_async
 
 
class TokenAuthMiddleware:
    """
    Custom token auth middleware
    """
 
    def __init__(self, inner):
        self.inner = inner
        self.user = None
 
    async def __call__(self, scope, receive=None, send=None):
        close_old_connections()
 
        token =parse_qs(scope["query_string"].decode("utf8"))["token"][0]
 
        user_id = await sync_to_async(Token.objects.get, thread_sensitive=True)(key=token) or None

        self.user = await sync_to_async(get_user_model().objects.get, thread_sensitive=True)(id=user_id.user_id)

        return await self.inner(dict(scope, user=self.user), receive, send)

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
        print(receive, send)
        # Close old database connections to prevent usage of timed out connections
        close_old_connections()
 
        # Get the token
        token =parse_qs(scope["query_string"].decode("utf8"))["token"][0]
 
        user_id = await sync_to_async(Token.objects.get, thread_sensitive=True)(key=token)

        self.user = await sync_to_async(get_user_model().objects.get, thread_sensitive=True)(id=user_id.user_id)

        print(self.user)

        # Return the inner application directly and let it run everything else
        return await self.inner(dict(scope, user=self.user), receive, send)

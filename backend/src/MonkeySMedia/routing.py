from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

import ChatSMedia.routing 

application = ProtocolTypeRouter({
   "websocket": AuthMiddlewareStack(
        URLRouter(
            ChatSMedia.routing.websocket_urlpatterns
        )
    ),
})

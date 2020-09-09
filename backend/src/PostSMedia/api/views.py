from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from PostSMedia.models import Post
from PostSMedia.serializers import PostSerializer

@api_view(["GET"])
def home(request):
    qs = Post.objects.all()
    serializer = PostSerializer(qs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from PostSMedia.models import Post
from PostSMedia.serializers import PostSerializer

@api_view(["GET"])
def list_posts_view(request):
    qs = Post.objects.all()
    serializer = PostSerializer(qs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
def create_posts_view(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors,
        status=status.HTTP_400_BAD_REQUEST)
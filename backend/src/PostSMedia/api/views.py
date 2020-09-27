from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import  TokenAuthentication
from PostSMedia.models import Post
from PostSMedia.serializers import PostSerializer


# List all posts
@api_view(["GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def list_posts_view(request):
    qs = Post.objects.all()
    serializer = PostSerializer(qs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Create a new posts
@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def create_posts_view(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#like and unlike posts
@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def like_unlike_posts_view(request):
    id = request.data.get("id")
    obj = Post.objects.get(id=id)
    if obj:
        for user_likes in obj.likes.all():
            if request.user == user_likes:
                obj.likes.remove(request.user)
                return Response({"like": "Removed"} ,status=status.HTTP_201_CREATED)

        obj.likes.add(request.user)
        return Response({"like": "Added"} ,status=status.HTTP_201_CREATED)

    
    return Response({"Fatal": "This Post does not exist"}, status=status.HTTP_400_BAD_REQUEST) 


# Delete a posts
@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def delete_post_view(request):
    id = request.data.get("id")
    obj = Post.objects.get(id=id)
    if obj:
        if obj.user == request.user:
            obj.delete()
            return Response({"Delete": "Deleted"}, status=status.HTTP_204_NO_CONTENT)

        return Response({"Fatal": "This post is not yours"}, status=status.HTTP_403_FORBIDDEN)
    
    return Response({"Fatal": "This Post Does not exist"}, status=status.HTTP_400_BAD_REQUEST)


# Get the user Posts used on profile
@api_view(["GET", "POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_user_posts_view(request):
    username = request.data.get("username")
    user = get_object_or_404(User, username=username)
    qs = Post.objects.filter(user=user)
    serializer = PostSerializer(qs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

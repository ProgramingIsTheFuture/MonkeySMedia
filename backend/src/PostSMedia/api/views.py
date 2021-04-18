from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import TokenAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework import filters
from PostSMedia.models import Post
from ProfileSMedia.models import ProfileUser
from PostSMedia.serializers import PostSerializer
from rest_framework.pagination import PageNumberPagination
from django.conf import settings 
import time

POST_PER_PAGE = settings.POST_PER_PAGE


def check_in_likes(request, obj):
    resp = False
    for user_likes in obj.likes.all():
        if request.user == user_likes:
            resp = True
    return resp


def check_in_following(request, obj):
    resp = []
    for user_follow in obj.all():
        resp.append(user_follow.id)
    resp.append(request.user.id)
    return resp


# List all posts from me and people i follow!
@api_view(["GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def list_posts_view(request):
    paginator = PageNumberPagination()
    paginator.page_size = POST_PER_PAGE
    user = request.user
    prof = ProfileUser.objects.get(id=user.id)
    users = check_in_following(request, prof.following)
    qs = Post.objects.filter(user__id__in=users).order_by('-timestamp')
    result_page = paginator.paginate_queryset(qs, request)
    serializer = PostSerializer(result_page, many=True)
    time.sleep(2)
    return paginator.get_paginated_response(serializer.data)

# Create a new posts


@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def create_posts_view(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# like and unlike posts
@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def like_unlike_posts_view(request):
    id = request.data.get("id")
    obj = Post.objects.get(id=id)
    if obj:

        check = check_in_likes(request, obj)

        if check:
            obj.likes.remove(request.user)
            return Response({"like": "Removed"}, status=status.HTTP_201_CREATED)

        obj.likes.add(request.user)
        return Response({"like": "Added"}, status=status.HTTP_201_CREATED)

    return Response({"Fatal": "This Post does not exist"}, status=status.HTTP_400_BAD_REQUEST)


# did i liked it before?
@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def check_like_posts_view(request):
    id = request.data.get("id")
    obj = Post.objects.get(id=id)
    if obj:
        check = check_in_likes(request, obj)
        
        if check:
            return Response({"true"}, status=status.HTTP_200_OK)

        return Response({"false"}, status=status.HTTP_200_OK)

    return Response({"Something went wrong!"}, status=status.HTTP_400_BAD_REQUEST)


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
    paginator = PageNumberPagination()
    paginator.page_size = POST_PER_PAGE
    user = get_object_or_404(User, username=username)
    qs = Post.objects.filter(user=user)
    result_page = paginator.paginate_queryset(qs, request)
    serializer = PostSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


# search-user-post?search= and then just type the title or content or the username
class SearchList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = (
        TokenAuthentication, SessionAuthentication, BasicAuthentication)
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['title', 'content', 'user__username']

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
from ProfileSMedia.models import ProfileUser
from ProfileSMedia.serializers import ProfileUserSerializer


def check_in_list(request, obj):
    resp = False
    for user_in in obj.all():
        if request.user == user_in:
            resp = True
    return resp


# get Profile using the username
@api_view(["GET", "POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_profile_by_username(request):
    username = request.data.get("username")
    user = get_object_or_404(User, username=username)
    obj = get_object_or_404(ProfileUser, user=user)
    serializer = ProfileUserSerializer(obj)
    return Response(serializer.data, status=status.HTTP_200_OK)


# search-profile?search= and then just type the username :)
class SearchList(generics.ListAPIView):
    queryset = ProfileUser.objects.all()
    serializer_class = ProfileUserSerializer
    authentication_classes = (
        TokenAuthentication, SessionAuthentication, BasicAuthentication)
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['user__username']



@api_view(["GET", "POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def post_Following_or_UnFollowing(request):
    username = request.data.get("username")
    userFollowed = get_object_or_404(User, username=username)
    profFollowed = get_object_or_404(ProfileUser, id=userFollowed.id)
    userFollowing = request.user
    profFollowing = get_object_or_404(ProfileUser, id=userFollowing.id)
    if userFollowed == userFollowing: return Response({"Error": "You can not follow your self!"}, status=status.HTTP_400_BAD_REQUEST)
    if check_in_list(request, profFollowed.followers):
        profFollowed.followers.remove(userFollowing)
        profFollowing.following.remove(userFollowed)
        return Response({"Follow": "Stop Following"}, status=status.HTTP_200_OK)
    
    profFollowed.followers.add(userFollowing)
    profFollowing.following.add(userFollowed)
    return Response({"Follow": "Success"}, status=status.HTTP_200_OK)


@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def check_follow_profile_view(request):
    username = request.data.get("username")
    username_prof = get_object_or_404(User, username=username)
    obj = get_object_or_404(ProfileUser, user=username_prof)
    me = get_object_or_404(ProfileUser, id=request.user.id)
    if obj:
        check = check_in_list(request, obj.followers)
        
        if check:
            return Response({"true"}, status=status.HTTP_200_OK)

        return Response({"false"}, status=status.HTTP_200_OK)

    return Response({"Something went wrong!"}, status=status.HTTP_400_BAD_REQUEST)

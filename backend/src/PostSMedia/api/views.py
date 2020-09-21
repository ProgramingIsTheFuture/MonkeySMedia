from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import  TokenAuthentication
from PostSMedia.models import Post
from PostSMedia.serializers import PostSerializer


@api_view(["GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def list_posts_view(request):
    qs = Post.objects.all()
    serializer = PostSerializer(qs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def create_posts_view(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def like_posts_view(request):
    id = request.data.get("id")
    obj = Post.objects.get(id=id)
    if obj:
        obj.likes.add(request.user)
        print(obj.likes)

        return Response({"like": "added"} ,status=status.HTTP_201_CREATED)
    
    return Response({"Fatal": "Something went wrong"}, status=status.HTTP_400_BAD_REQUEST) 
        
@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def unlike_posts_view(request):
    id = request.data.get("id")
    obj = Post.objects.get(id=id)
    if obj:
        obj.likes.remove(request.user)

        return Response({"Unlike": "like remove"}, status=status.HTTP_201_CREATED)
    return Response({"Fatal": "Something went wrong"}, status=status.HTTP_201_CREATED)


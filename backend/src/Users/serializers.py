from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


class UserCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name',
                  'last_name', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True},
                        'first_name': {'required': True}, 'last_name': {'required': True}, 'email': {'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
# from .models import CustomUser
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

CustomUser = get_user_model()
class CustomUserSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'school_name', 'password1', 'password2']

    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def validate_password(self, value: str) -> str:
        return make_password(value)

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            school_name=validated_data['school_name'],
            password=validated_data['password1']
        )
        return user
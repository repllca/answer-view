from django.contrib.auth import get_user_model
from rest_framework import generics
from .serializers import UserSerializer
from django.contrib.auth.models import User

class UserViewAPI(generics.CreateAPIview):
    queryset = User.objects.all()
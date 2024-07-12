from rest_framework import generics, views, permissions, status
from django.contrib.auth import login, logout
from rest_framework.response import Response
from . import serializers, models
class CustomUserCreateView(generics.CreateAPIView):
    queryset = models.CustomUser.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.CustomUserSerializer
class LoginView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = serializers.LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        print(user)
        login(request, user)
        user_serializer = serializers.CustomUserSerializer(user)
        return Response(user_serializer.data, status=status.HTTP_200_OK)

class LogoutView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
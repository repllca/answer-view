from rest_framework import generics, views, permissions, status
from django.contrib.auth import login, logout
from rest_framework.response import Response
from . import serializers, models
from rest_framework_simplejwt.tokens import RefreshToken
class CustomUserCreateView(generics.CreateAPIView):
    queryset = models.CustomUser.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.CustomUserSerializer
class LogoutView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class DetailView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        user = request.user
        if not user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
        
        detail_serializer = serializers.CustomUserSerializer(user)
        return Response(detail_serializer.data, status=status.HTTP_200_OK)
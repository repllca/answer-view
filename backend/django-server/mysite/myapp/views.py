from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets,status, permissions
from rest_framework.response import Response
from .models import Kadai
from .serializers import KadaiSerializer
from .permissions import IsOwnerOrReadOnly

class KadaiAPIView(viewsets.ModelViewSet):
    """
    認証されたuserなら書き込みと、読み込みを許可する、それ以外なら読み込みを許可
    """
    queryset = Kadai.objects.all()
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                        IsOwnerOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

def index(request):
    print("aa")
    return HttpResponse("Hello, world. You're at the polls index.")

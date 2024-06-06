from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics,status, permissions, viewsets
from rest_framework.response import Response
from .models import Kadai
from .serializers import KadaiSerializer, KadaiListSerializer
from .permissions import IsOwnerOrReadOnly

class KadaiListAPIView(generics.ListCreateAPIView):
    """
    保存されているリストを表示
    """
    queryset = Kadai.objects.all()
    # serializer_class = KadaiListSerializer
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                        IsOwnerOrReadOnly]
    

class KadaiDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    認証されたuserなら書き込みと、読み込みを許可する、それ以外なら読み込みを許可
    """
    queryset = Kadai.objects.all()
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                        IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# class KadaiAPIView(viewsets.ModelViewSet):
#     @action(methods=["get"],detail=False)
#     def respect_call(self,request):
#         queryset = Kadai.objects.all()
#         serializer_class = KadaiListSerializer
#         permission_classes = [permissions.IsAuthenticatedOrReadOnly,
#                             IsOwnerOrReadOnly]
#     @action(methods=["get"],detail=False)
#     def respect_call(self,request):
#         queryset = Kadai.objects.all()
#         serializer_class = KadaiListSerializer
#         permission_classes = [permissions.IsAuthenticatedOrReadOnly,
#                             IsOwnerOrReadOnly]
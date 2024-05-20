from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.response import Response
from .models import Kadai
from .serializers import KadaiSerializer

class KadaiAPIView(viewsets.ModelViewSet):
    queryset = Kadai.objects.all()
    a = "test"
    a = 1
    #ここにkadaiにアクセスしたときの処理を書く

    # def get(self, request):#情報が送られてこない
    #     kadai = Kadai.objects.all()
    #     serializer = KadaiSerializer(kadai, many=True)
    #     print("aa")
    #     return Response(serializer.data)    

    # def post(self, request):#情報が送られてくる
    #     serializer = KadaiSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         print(serializer.data)
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def index(request):
    print("aa")
    return HttpResponse("Hello, world. You're at the polls index.")

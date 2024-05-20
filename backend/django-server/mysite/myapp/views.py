from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from .models import Kadai
from .serializers import KadaiSerializer

class KadaiAPIView(viewsets.ModelViewSet):
    queryset = Kadai.objects.all()
    serializer_class = KadaiSerializer

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
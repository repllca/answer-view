from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("Hello,world. youre at the polls index.")


#シンプルな表示（htmlの表示）
def test(request):
    html = "<h1>aaa</h1><h2>aaa</h2>"
    return HttpResponse(html)
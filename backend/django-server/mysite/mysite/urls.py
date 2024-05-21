from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),#database
    path("myapp/",include("myapp.urls")),#
]

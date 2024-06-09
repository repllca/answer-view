from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api-auth/",include("rest_framework.urls")),
    path("signup/",include("signup.urls")),
    path("myapp/",include("myapp.urls")),
]

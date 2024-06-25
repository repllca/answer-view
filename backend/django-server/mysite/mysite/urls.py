from django.contrib import admin
from django.urls import path,include
    
urlpatterns = [
    path('admin/', admin.site.urls),#管理サイト
    path("myapp/",include("myapp.urls")),#app
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls'))
    # path("signup/",include("signup.urls")),#singup
]

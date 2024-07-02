from django.contrib import admin
from django.urls import path, include
from accounts.views import  CustomConfirmEmailView  
from dj_rest_auth.registration.views import VerifyEmailView

urlpatterns = [
    path('admin/', admin.site.urls),#管理サイト
    path("myapp/",include("myapp.urls")),#myapp
    path('dj/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_verification_sent'),
    path('dj/registration/account-confirm-email/<key>/', CustomConfirmEmailView.as_view(), name='account_confirm_email'),
    path('dj/', include('dj_rest_auth.urls')),
    path('dj/registration/', include('dj_rest_auth.registration.urls')),
]

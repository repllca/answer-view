from django.contrib import admin
from django.urls import path, include
from accounts.views import  CustomConfirmEmailView  
from dj_rest_auth.registration.views import VerifyEmailView

urlpatterns = [
    path('admin/', admin.site.urls),#管理サイト
    path("myapp/",include("myapp.urls")),#myapp
    path('dj-rest-auth/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_verification_sent'),
    path('dj-rest-auth/registration/account-confirm-email/<key>/', CustomConfirmEmailView.as_view(), name='account_confirm_email'),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]

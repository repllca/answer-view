from django.contrib import admin
from django.urls import path,include
from myapp.views import CustomConfirmEmailView

urlpatterns = [
    path('admin/', admin.site.urls),#管理サイト
    path('dj-rest-auth/registration/account-confirm-email/<str:key>/', CustomConfirmEmailView.as_view(), name='account_confirm_email'),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls'))
    # path("signup/",include("signup.urls")),#singup
]

from pathlib import Path
from datetime import timedelta
import os
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-#ooj5-@&b_w=j=7ps=x8s^cu42092a%*$uysp2+o@s35jbd3@s'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
# 公開を許可するドメインを指定する
ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'corsheaders',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # 3rd party apps
    "rest_framework",
    "djoser",

    # my applications
    "myapp.apps.MyappConfig",
    "accounts",
]


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    #追加 cors
    "corsheaders.middleware.CorsMiddleware",

    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOWED_ORIGINS = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
]


ROOT_URLCONF = 'mysite.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mysite.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'ja'

TIME_ZONE = 'Asia/Tokyo'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


#-------------------------------------------------
AUTH_USER_MODEL = "accounts.User"

#ページネーション
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,

    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}


SIMPLE_JWT = {
   'AUTH_HEADER_TYPES': ('JWT',),
    #トークンの持続時間の設定
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=1),
    # リフレッシュトークン(5日)
    "REFRESH_TOKEN_LIFETIME": timedelta(days=5),
}

# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
# EMAIL_HOST = 'smtp.gmail.com'
# # EMAIL_PORT = 587
# EMAIL_USE_TLS = True
# EMAIL_HOST_USER = 'your-email@gmail.com'
# # EMAIL_HOST_PASSWORD = 'your-password'
# SITE_NAME = "test djoser"

# DJOSER = {
#     'PASSWORD_RESET_CONFIRM_URL': '#/password/reset/confirm/{uid}/{token}',
#     'USERNAME_RESET_CONFIRM_URL': '#/username/reset/confirm/{uid}/{token}',
#     'ACTIVATION_URL': '#/activate/{uid}/{token}',

#     'SEND_ACTIVATION_EMAIL': True,
#     'SERIALIZERS': {
#         'user_create': 'accounts.serializers.UserCreateSerializer',
#         'current_user': 'accounts.serializers.UserSerializer',
#         'user': 'accounts.serializers.UserSerializer',
#     },
# }
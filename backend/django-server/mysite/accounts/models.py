from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.base_user import BaseUserManager

class CustomUserManager(BaseUserManager):
    """
    アカウントを作成する際の設定
    """
    def create_user(self, email, username, school_name, password=None, **extra_fields):
        if not email:
            raise ValueError(_('The Email must be set'))
        if not username:
            raise ValueError(_('The username must be set'))
        if not school_name:
            raise ValueError(_('The school_name must be set'))
            

        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_active', True)
        
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, school_name=school_name, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, school_name="None", password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, username, school_name, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    """
    アカウントを作成するfield
    USERNAME_FIELD ログイン時にusernameを使用
    REQUIRED_FIELDS superuserを作成時にemailを必須に設定
    """
    email = models.EmailField(unique=True,blank=False)
    username = models.CharField(max_length=32,unique=True, blank=False)
    school_name = models.CharField(max_length=16,blank=False)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = CustomUserManager()

    def __str__(self):
        return self.email
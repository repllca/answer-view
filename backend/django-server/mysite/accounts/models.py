from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser

class CustomUser(AbstractUser):
    school_name = models.CharField(max_length=32, blank=True, null=True)

    def __str__(self):
        return self.username


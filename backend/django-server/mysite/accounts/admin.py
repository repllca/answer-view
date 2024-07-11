from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

CustomUser = get_user_model()
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'username', 'school_name', 'is_staff', 'is_active',)
    list_filter = ('email', 'username', 'school_name', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'username', 'school_name', 'password')}),
        (_('Permissions'), {'fields': ('is_staff', 'is_active', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'school_name', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email', 'username', 'school_name')
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)
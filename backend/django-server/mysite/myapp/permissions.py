from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    objectの作成者のみ編集できるようにする
    """
    def has_object_permission(self, request, view, obj):
        """
        permissionが設定されたviewかつ特定のobjectに対して権限があるユーザからのアクセスならTrue
        permissions.SAFE_METHODSは読み取りなら常にTrue,書き込みリクエストならobject.ownerとrequest.ownerが同じならTrue
        """
        if request.method in permissions.SAFE_METHODS:
            # SEFE_METHODSはGET, OPTIONS, HEADを含むタプル
            return True
        return obj.owner == request.user
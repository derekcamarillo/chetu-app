from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include
from rest_framework import routers

from .views import Doctors
from .views import UserViewSet
from .views import Patients

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('patients', Patients)
router.register('doctors', Doctors)

urlpatterns = [
    path('', include(router.urls)),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
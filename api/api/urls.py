from django.contrib import admin
from django.urls import include
from django.urls import path
from django.urls import re_path
from rest_framework import routers

from miio import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'cards', views.CardViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),

    re_path(r'.*', views.FrontendAppView.as_view()),
]

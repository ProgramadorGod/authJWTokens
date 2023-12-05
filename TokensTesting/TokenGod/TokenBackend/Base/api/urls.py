from django.urls import path, include
from . import views
from . views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import getNotes, getNotes2, getRoutes
from rest_framework.routers import DefaultRouter

router= DefaultRouter()
router.register(r'notes', getNotes, basename='notes')



urlpatterns = [
    path('', include(router.urls)),
    path('', views.getRoutes),
    path('notes2/', views.getNotes2),
    path("notes/", getNotes.as_view, name="notes"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', getRoutes),

]
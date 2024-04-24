from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.urls import path
from .views import *
urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('user/', UserProfileView.as_view()),
    path('gyms/<str:city>/', GymsByCityView.as_view(), name='gyms-by-city'),
    path('gyms/<str:city>/<str:category_name>/', GymsByCityCategoryView.as_view(), name='gyms-by-city-category'),
    path('gyms/<str:name/', GymDetail, name='gym-detail'),
    path('create-subscription/<str:type>/', CreateSubscriptionView.as_view(), name='create-subscription'),
]
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

from ..models import Gym
from ..serializers import GymSerializer
from rest_framework import status

from django.views.generic import ListView

class GymsByCityView(APIView):
    def get(self, request, city):
        gyms = Gym.objects.filter(city__iexact=city)
        serializer = GymSerializer(gyms, many=True)
        return Response(serializer.data)

class GymsByCityCategoryView(APIView):
    def get(self, request, city, category_name):
        gyms = Gym.objects.filter(city__iexact=city, categories__name__iexact=category_name)
        serializer = GymSerializer(gyms, many=True)
        return Response(serializer.data)


class GymDetailView(APIView):
    def get(self, request, id):
        gym = get_object_or_404(Gym, id=id)
        serializer = GymSerializer(gym)
        return Response(serializer.data)
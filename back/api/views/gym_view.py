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
    def get(self, request, name):
        try:
            gym = Gym.objects.get(name=name)
            serializer = GymSerializer(gym)
            return Response(serializer.data)
        except Gym.DoesNotExist as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    def get_queryset(self):
        return Gym.objects.filter(gym_id=self.kwargs['gym_id'], is_published=True)

@api_view(["GET"])
def GymDetail(request, name):
    gym = Gym.objects.get(name=name)
    serializer = GymSerializer(gym)
    return Response(serializer.data)


@api_view(['GET'])
def list_gyms(request):
    if request.method == 'GET':
        gyms = Gym.objects.all()
        serializer = GymSerializer(gyms, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

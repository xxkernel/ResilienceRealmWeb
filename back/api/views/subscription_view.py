from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..serializers import SubscriptionSerializer
from django.utils import timezone
from datetime import timedelta
from ..models import Subscription, User

class CreateSubscriptionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, type):
        user = request.user
        start_date = timezone.now().date()

        if type == 'single':
            end_date = start_date + timedelta(days=1)
        elif type == 'monthly':
            end_date = start_date + timedelta(days=30)
        elif type == 'annual':
            end_date = start_date + timedelta(days=365)
        else:
            return Response({'error': 'Invalid subscription type'}, status=status.HTTP_400_BAD_REQUEST)

        subscription = Subscription(user=user, start_date=start_date, end_date=end_date, type=type)
        subscription.save()
        return Response({'message': 'Subscription created'}, status.HTTP_201_CREATED)

from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Gym, Review, Subscription, Category


class SubscriptionSerializer(serializers.ModelSerializer):
    gym_name = serializers.ReadOnlyField(source='gym.name')  # Добавляем название зала для удобства

    class Meta:
        model = Subscription
        fields = ['id', 'gym_name', 'type', 'start_date', 'end_date']


class UserSerializer(serializers.ModelSerializer):
    subscriptions = SubscriptionSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username',  'subscriptions']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class GymSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Gym
        fields = '__all__'
class ReviewSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    user_id = serializers.IntegerField(required=True)
    gym_id = serializers.IntegerField(required=True)
    rating = serializers.IntegerField(min_value=1, max_value=5)
    comment = serializers.CharField(required=False)
    created_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return Review.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.rating = validated_data.get('rating', instance.rating)
        instance.comment = validated_data.get('comment', instance.comment)
        instance.save()
        return instance



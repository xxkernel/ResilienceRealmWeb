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


class GymSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    address = serializers.CharField(max_length=500)
    description = serializers.CharField(style={'base_template': 'textarea.html'})
    city = serializers.ChoiceField(choices=Gym.CITY_CHOICES)
    image_url1 = serializers.URLField(allow_null=True, required=False)
    image_url2 = serializers.URLField(allow_null=True, required=False)
    image_url3 = serializers.URLField(allow_null=True, required=False)
    shower = serializers.BooleanField(default=False)
    locker_room = serializers.BooleanField(default=False)
    shop = serializers.BooleanField(default=False)
    wifi = serializers.BooleanField(default=False)
    music = serializers.BooleanField(default=False)
    parking = serializers.BooleanField(default=False)
    twenty_four_seven = serializers.BooleanField(default=False)
    categories = CategorySerializer(many=True, read_only=True)

    def create(self, validated_data):
        """
        Create and return a new `Gym` instance, given the validated data.
        """
        return Gym.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Gym` instance, given the validated data.
        """
        instance.name = validated_data.get('name', instance.name)
        instance.address = validated_data.get('address', instance.address)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.image_url1 = validated_data.get('image_url1', instance.image_url1)
        instance.image_url2 = validated_data.get('image_url2', instance.image_url2)
        instance.image_url3 = validated_data.get('image_url3', instance.image_url3)
        instance.shower = validated_data.get('shower', instance.shower)
        instance.locker_room = validated_data.get('locker_room', instance.locker_room)
        instance.shop = validated_data.get('shop', instance.shop)
        instance.wifi = validated_data.get('wifi', instance.wifi)
        instance.music = validated_data.get('music', instance.music)
        instance.parking = validated_data.get('parking', instance.parking)
        instance.twenty_four_seven = validated_data.get('twenty_four_seven', instance.twenty_four_seven)
        instance.save()
        return instance
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



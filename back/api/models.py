from django.db import models
from django.contrib.auth.models import User

from django.db import models


class Gym(models.Model):
    CITY_CHOICES = [
        ('almaty', 'Алматы'),
        ('astana', 'Астана'),
        ('shymkent', 'Шымкент'),
        ('karaganda', 'Караганда'),
        ('oral', 'Орал')
    ]
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    description = models.TextField()
    city = models.CharField(max_length=100, choices=CITY_CHOICES, default='almaty')
    categories = models.ManyToManyField('Category', related_name='gyms')

    # Удобства
    shower = models.BooleanField(default=False, verbose_name="Душ")
    locker_room = models.BooleanField(default=False, verbose_name="Гардероб")
    shop = models.BooleanField(default=False, verbose_name="Магазин")
    wifi = models.BooleanField(default=False, verbose_name="Вайфай")
    music = models.BooleanField(default=False, verbose_name="Музыка")
    parking = models.BooleanField(default=False, verbose_name="Парковка")
    twenty_four_seven = models.BooleanField(default=False, verbose_name="24/7")

    def __str__(self):
        return self.name
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Subscription(models.Model):
    TYPE_CHOICES = [
        ('single', 'Разовый'),
        ('monthly', 'Месячный'),
        ('annual', 'Годовой'),
    ]
    user = models.ForeignKey(User, related_name='subscriptions', on_delete=models.CASCADE)
    gym = models.ForeignKey(Gym, related_name='subscriptions', on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    type = models.CharField(max_length=50, choices=TYPE_CHOICES)

    def __str__(self):
        return f'{self.id}: {self.type}'

class Review(models.Model):
    gym = models.ForeignKey(Gym, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='reviews', on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.gym.name} - {self.rating}/5"


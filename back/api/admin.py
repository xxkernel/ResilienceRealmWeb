from django.contrib import admin
from .models import Gym, Subscription, Review, Category

admin.site.register(Review)
admin.site.register(Subscription)
class GymAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'description', 'shower', 'locker_room', 'shop', 'wifi', 'music', 'parking', 'twenty_four_seven')
    list_filter = ('city', 'categories', 'shower', 'locker_room', 'shop', 'wifi', 'music', 'parking', 'twenty_four_seven')
    search_fields = ('name', 'city')
    filter_horizontal = ('categories',)

admin.site.register(Gym, GymAdmin)
admin.site.register(Category)
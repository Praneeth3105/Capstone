from django.contrib import admin

# Register your models here.

from .models import CarMake, CarModel

admin.site.register(CarMake)
admin.site.register(CarModel)

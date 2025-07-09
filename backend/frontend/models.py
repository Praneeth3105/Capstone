from django.db import models

# Create your models here.

class CarMake(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class CarModel(models.Model):
    make = models.ForeignKey(CarMake, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

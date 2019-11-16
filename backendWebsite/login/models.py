from django.db import models

# Create your models here.

#This class us a reppresentation of the user. It involves two
#character fields: a username and a password.
class User(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    def __str__(self):
        return self.username + " " + self.password
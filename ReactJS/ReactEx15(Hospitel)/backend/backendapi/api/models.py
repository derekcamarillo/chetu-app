from django.db import models
from django.utils import timezone


# Create your models here.
class Patients(models.Model):
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    Guardian = models.CharField(max_length=50)
    GuardianMobile = models.CharField(max_length=15)
    PatientEmail = models.CharField(max_length=25)
    GuardianEmail = models.CharField(max_length=25)
    PatientMobile = models.CharField(max_length=15)
    AlterNetMobile = models.CharField(max_length=15)
    DateOfBirth = models.DateField(default=timezone.now)
    DateOfAdmit = models.DateField(default=timezone.now)
    PatientProblem = models.TextField(max_length=100)
    DrName = models.CharField(max_length=30)
    CurrentAddress = models.TextField(max_length=70)
    ParmanentAddress = models.TextField(max_length=70)

    def __str__(self):
        return self.FirstName

class Doctors(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    email = models.CharField(max_length=25)
    avatar = models.ImageField(blank=True, upload_to='DrAvatar')
    speciality = models.CharField(max_length=30)
    pracSpeciality = models.CharField(max_length=50)
    mobile = models.CharField(max_length=15)
    altmobile = models.CharField(max_length=15)
    dob = models.DateField(default=timezone.now)
    exp = models.CharField(max_length=5)
    caddress = models.TextField(max_length=70)
    paddress =  models.TextField(max_length=70)
    passw = models.CharField(max_length=20)
    cpass = models.CharField(max_length=20)

    def __str__(self):
        return self.fname

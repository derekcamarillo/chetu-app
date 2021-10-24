from rest_framework import serializers, viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer
from .models import Patients
from .serializers import PatientsSerializer
from .models import Doctors
from .serializers import DoctersSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class Patients(viewsets.ModelViewSet):
    queryset = Patients.objects.all()
    serializer_class = PatientsSerializer

class Doctors(viewsets.ModelViewSet):
    queryset = Doctors.objects.all()
    serializer_class = DoctersSerializer
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Doctors, Patients


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class PatientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = ['id', 'FirstName', 'LastName', 'Guardian', 'GuardianMobile', 'PatientEmail', 'GuardianEmail', 'PatientMobile',
                  'AlterNetMobile', 'DateOfBirth', 'DateOfAdmit', 'PatientProblem', 'DrName', 'CurrentAddress', 'ParmanentAddress']

class DoctersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctors
        # fields = ['id', 'fname', 'lname', 'email', 'avatar', 'speciality', 'pracSpeciality', 'mobile', 'altmobile', 'dob', 'exp', 'caddress', 'paddress', 'passw', 'cpass']
        fields = '__all__'
from django.contrib import admin
from .models import Patients
from .models import Doctors

# Register your models here.
admin.site.register(Patients)
admin.site.register(Doctors)

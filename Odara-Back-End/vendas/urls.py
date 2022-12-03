from django.urls import path
from . import views

urlpatterns = [
    path('homev/', views.homev, name="homev"),
    path('formv/', views.formv, name="formv"),
    path('createv/', views.createv, name="createv"),
    path('viewv/<int:pk>/', views.viewv, name="viewv"),
    path('editv/<int:pk>/', views.editv, name="editv"),
    path('updatev/<int:pk>/', views.updatev, name="updatev"),
    path('deletev/<int:pk>/', views.deletev, name="deletev"),
]
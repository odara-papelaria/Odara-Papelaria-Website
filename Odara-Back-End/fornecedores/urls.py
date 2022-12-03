from django.urls import path
from . import views

urlpatterns = [
    path('homef/', views.homef, name="homef"),
    path('formf/', views.formf, name="formf"),
    path('createf/', views.createf, name="createf"),
    path('viewf/<int:pk>/', views.viewf, name="viewf"),
    path('editf/<int:pk>/', views.editf, name="editf"),
    path('updatef/<int:pk>/', views.updatef, name="updatef"),
    path('deletef/<int:pk>/', views.deletef, name="deletef"),
    ]
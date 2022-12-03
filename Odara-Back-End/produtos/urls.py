from django.urls import path
from . import views

urlpatterns = [
    path('homep/', views.homep, name="homep"),
    path('formp/', views.formp, name="formp"),
    path('createp/', views.createp, name="createp"),
    path('viewp/<int:pk>/', views.viewp, name="viewp"),
    path('editp/<int:pk>/', views.editp, name="editp"),
    path('updatep/<int:pk>/', views.updatep, name="updatep"),
    path('deletep/<int:pk>/', views.deletep, name="deletep"),
    ]
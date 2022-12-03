from django.urls import path
from . import views

urlpatterns = [
    path('homec/', views.homec, name="homec"),
    path('formc/', views.formc, name="formc"),
    path('createc/', views.createc, name="createc"),
    path('viewc/<int:pk>/', views.viewc, name="viewc"),
    path('editc/<int:pk>/', views.editc, name="editc"),
    path('updatec/<int:pk>/', views.updatec, name="updatec"),
    path('deletec/<int:pk>/', views.deletec, name="deletec"),
]
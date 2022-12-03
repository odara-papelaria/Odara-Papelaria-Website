from django.urls import path
from . import views


urlpatterns = [
    #path('', views.login, name="login"),
    path('login/', views.login, name='login'), ##voltar ao nomral tirar ess url
    path('cadastro/',views.cadastro, name='cadastro'),
    path('valida_cadastro/',views.valida_cadastro, name='valida_cadastro'),
    path('valida_login/',views.valida_login, name='valida_login'),
    path('sairi/',views.sairi, name='sairi'),
    path('sair/',views.sair, name='sair')
   ]


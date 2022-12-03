from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('usuarios.urls')),
    path('', include('clientes.urls')),
    path('', include('fornecedores.urls')),
    path('', include('produtos.urls')),
    path('', include('contas.urls')),
    path('', include('vendas.urls')),
]

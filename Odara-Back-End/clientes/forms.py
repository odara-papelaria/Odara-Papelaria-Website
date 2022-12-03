from django.forms import ModelForm
from clientes.models import Cliente

class ClienteForm(ModelForm):
    class Meta:
        model = Cliente
        fields = ['nomeCliente', 'telefoneCliente', 'emailcliente']
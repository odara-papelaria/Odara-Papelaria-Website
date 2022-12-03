from django.forms import ModelForm
from contas.models import Conta


class ContaForm(ModelForm):
    class Meta:
        model = Conta
        fields = ['descricao', 'valor', 'dataVenc','status']


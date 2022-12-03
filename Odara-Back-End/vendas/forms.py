from django.forms import ModelForm
from vendas.models import Venda


class VendaForm(ModelForm):
    class Meta:
        model = Venda
        fields = ['valorVenda', 'quantidadeVenda', 'dataVenda']

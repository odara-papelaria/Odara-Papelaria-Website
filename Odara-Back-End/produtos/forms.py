from django.forms import ModelForm
from produtos.models import Produto


class ProdutoForm(ModelForm):
    class Meta:
        model = Produto
        fields = ['nomeProduto', 'valorProduto', 'quantidadeProduto', 'dataCompra']

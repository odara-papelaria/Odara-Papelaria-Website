from django.forms import ModelForm
from fornecedores.models import Fornecedor


class FornecedorForm(ModelForm):
    class Meta:
        model = Fornecedor
        fields = ['nomeFornec', 'telefoneFornec', 'emailFornec']


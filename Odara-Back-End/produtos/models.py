from django.db import models

class Produto(models.Model):
    nomeProduto = models.CharField(max_length=100)
    valorProduto = models.DecimalField(max_digits=8, decimal_places=2)
    quantidadeProduto = models.IntegerField()
    dataCompra = models.DateField()

    def __str__(self):
        return self.nomeProduto

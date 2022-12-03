from django.db import models

class Venda(models.Model):
    valorVenda = models.DecimalField(max_digits=8, decimal_places=2)
    quantidadeVenda = models.IntegerField()
    dataVenda = models.DateField()

    def __str__(self):
        return self.valorVenda

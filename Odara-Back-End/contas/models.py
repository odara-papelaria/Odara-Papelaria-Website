from django.db import models

class Conta(models.Model):
    descricao = models.CharField(max_length=100)
    valor = models.DecimalField(max_digits=8, decimal_places=2)
    dataVenc = models.DateField()
    status = models.BooleanField()

    def __str__(self):
        return self.descricao


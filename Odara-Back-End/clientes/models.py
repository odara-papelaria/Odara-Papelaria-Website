from django.db import models

class Cliente(models.Model):
    nomeCliente = models.CharField(max_length=100)
    telefoneCliente = models.CharField(max_length=16)
    emailcliente = models.EmailField()

    def __str__(self):
        return self.nomeCliente


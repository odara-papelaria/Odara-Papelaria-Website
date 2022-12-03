from django.db import models

class Fornecedor(models.Model):
    nomeFornec = models.CharField(max_length=100)
    telefoneFornec = models.CharField(max_length=16)
    emailFornec = models.EmailField()
    regiao = models.CharField(max_length=30)

    def __str__(self):
        return self.nomeFornec

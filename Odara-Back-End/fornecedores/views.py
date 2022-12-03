from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Fornecedor
from clientes.forms import ClienteForm

def homef(request):
    #data = {}
    #data ['db'] = Fornecedor.objects.all()
    return HttpResponse('Estou na Tela Fornecedores')
    #return render(request, 'home.html', data)===>>>Tela Front

def formf(request):
    data = {}
    data['form'] = ClienteForm()
    return HttpResponse('Estou na Tela Form')
    #return render(request, 'form.html', data)

def createf(request):
    form = ClienteForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('homef')

def viewf(request, pk):
    data = {}
    data['db'] = Fornecedor.objects.get(pk=pk)
    return render(request, 'viewf.html', data)
## Dados que vem do Banco de Dados
def editf(request, pk):
    data = {}
    data['db'] = Fornecedor.objects.get(pk=pk)
    data['form'] = ClienteForm(instance=data['db'])
    return render(request, 'formf.html', data)

def updatef(request, pk):
    data = {}
    data['db'] = Fornecedor.objects.get(pk=pk)
    form = ClienteForm(request.POST or None,instance=data['db'])
    if form.is_valid():
        form.save()
    return redirect('homef')

def deletef(request, pk):
    db = Fornecedor.objects.get(pk=pk)
    db.delete()
    return redirect('homef')

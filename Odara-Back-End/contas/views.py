from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Conta
from contas.forms import ContaForm

def homec(request):
    #data = {}
    #data ['db'] = Fornecedor.objects.all()
    return HttpResponse('Estou na Tela de Contas')
    #return render(request, 'home.html', data)===>>>Tela Front

def formc(request):
    data = {}
    data['form'] = ContaForm()
    return HttpResponse('Estou na Tela Form')
    #return render(request, 'form.html', data)

def createc(request):
    form = ContaForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('homec')

def viewc(request, pk):
    data = {}
    data['db'] = Conta.objects.get(pk=pk)
    return render(request, 'viewc.html', data)
## Dados que vem do Banco de Dados
def editc(request, pk):
    data = {}
    data['db'] = Conta.objects.get(pk=pk)
    data['form'] = ContaForm(instance=data['db'])
    return render(request, 'formc.html', data)

def updatec(request, pk):
    data = {}
    data['db'] = Conta.objects.get(pk=pk)
    form = ContaForm(request.POST or None,instance=data['db'])
    if form.is_valid():
        form.save()
    return redirect('homec')

def deletec(request, pk):
    db = Conta.objects.get(pk=pk)
    db.delete()
    return redirect('homec')

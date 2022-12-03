from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Venda
from vendas.forms import VendaForm

def homev(request):
    #data = {}
    #data ['db'] = Fornecedor.objects.all()
    return HttpResponse('Estou na Tela de Vendas')
    #return render(request, 'home.html', data)===>>>Tela Front

def formv(request):
    data = {}
    data['form'] = VendaForm()
    return HttpResponse('Estou na Tela Form')
    #return render(request, 'form.html', data)

def createv(request):
    form = VendaForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('homev')

def viewv(request, pk):
    data = {}
    data['db'] = VendaForm.objects.get(pk=pk)
    return render(request, 'viewv.html', data)
## Dados que vem do Banco de Dados
def editv(request, pk):
    data = {}
    data['db'] = Venda.objects.get(pk=pk)
    data['form'] = VendaForm(instance=data['db'])
    return render(request, 'formv.html', data)

def updatev(request, pk):
    data = {}
    data['db'] = Venda.objects.get(pk=pk)
    form = VendaForm(request.POST or None,instance=data['db'])
    if form.is_valid():
        form.save()
    return redirect('homev')

def deletev(request, pk):
    db = Venda.objects.get(pk=pk)
    db.delete()
    return redirect('homec')

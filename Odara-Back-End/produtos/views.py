from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Produto
from produtos.forms import ProdutoForm

def homep(request):
    #data = {}
    #data ['db'] = Fornecedor.objects.all()
    return HttpResponse('Estou na Tela Produtos')
    #return render(request, 'home.html', data)===>>>Tela Front

def formp(request):
    data = {}
    data['form'] = ProdutoForm()
    return HttpResponse('Estou na Tela Form')
    #return render(request, 'form.html', data)

def createp(request):
    form = ProdutoForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('homep')

def viewp(request, pk):
    data = {}
    data['db'] = Produto.objects.get(pk=pk)
    return render(request, 'viewp.html', data)
## Dados que vem do Banco de Dados
def editp(request, pk):
    data = {}
    data['db'] = Produto.objects.get(pk=pk)
    data['form'] = ProdutoForm(instance=data['db'])
    return render(request, 'formp.html', data)

def updatep(request, pk):
    data = {}
    data['db'] = Produto.objects.get(pk=pk)
    form = ProdutoForm(request.POST or None,instance=data['db'])
    if form.is_valid():
        form.save()
    return redirect('homep')

def deletep(request, pk):
    db = Produto.objects.get(pk=pk)
    db.delete()
    return redirect('homep')

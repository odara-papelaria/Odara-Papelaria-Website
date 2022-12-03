from django.shortcuts import render, redirect
from .models import Cliente
from clientes.forms import ClienteForm

def principal(request):
    data = {}
    data ['db'] = Cliente.objects.all()
    return render(request, 'principal.html', data)

def form(request):
    data = {}
    data['form'] = ClienteForm()
    return render(request, 'form.html', data)

def create(request):
    form = ClienteForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('principal')

def view(request, pk):
    data = {}
    data['db'] = Cliente.objects.get(pk=pk)
    return render(request, 'view.html', data)
## Dados que vem do Banco de Dados
def edit(request, pk):
    data = {}
    data['db'] = Cliente.objects.get(pk=pk)
    data['form'] = ClienteForm(instance=data['db'])
    return render(request, 'form.html', data)

def update(request, pk):
    data = {}
    data['db'] = Cliente.objects.get(pk=pk)
    form = ClienteForm(request.POST or None,instance=data['db'])
    if form.is_valid():
        form.save()
    return redirect('principal')

def delete(request, pk):
    db = Cliente.objects.get(pk=pk)
    db.delete()
    return redirect('principal')



from django.shortcuts import render
from .models import Usuario
from django.shortcuts import redirect
from hashlib import sha256


from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

def login(request):
    status = request.GET.get('status')
    return render(request,'login.html', {'status': status})

def cadastro(request):
    status = request.GET.get('status')
    return render(request,'cadastro.html', {'status': status})    

def valida_cadastro(request):
    nome = request.POST.get('nome')
    email = request.POST.get('email')
    senha = request.POST.get('senha')

    usuario = Usuario.objects.filter(email = email)

    if len(email.strip()) == 0:
        return redirect('/cadastro/?status=1') 

    if len(senha) < 8:
        return redirect('/cadastro/?status=2')
            
    if len(usuario) > 0:
       return redirect('/cadastro/?status=3')

    try:
        senha = sha256(senha.encode()).hexdigest()
        usuario = Usuario(senha = senha, email = email)
        usuario.save()
        return redirect('/cadastro/?status=0')
    except:
        return redirect('/cadastro/?status=4')

def valida_login(request):
    email = request.POST.get('email') 
    senha = request.POST.get('senha')

    senha = sha256(senha.encode()).hexdigest()

    usuario = Usuario.objects.filter(email = email).filter(senha = senha)

    if len(usuario) == 0:
        return redirect('/login/?status=1')
    elif len(usuario) > 0:
        request.session['usuario'] = usuario[0].id
        return redirect('sairi')   ##('/auth/sairi/') ####VERIFCAR PAGINA CORRETA     sairi

def sair(request):
    request.session.flush()
    return redirect('/login') 


def sairi(request):
   return render(request,'sairi.html')


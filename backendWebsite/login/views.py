
from django.http import HttpResponse
from django.template import loader

from .models import User

#An introductory message:
def index(request):
    template = loader.get_template('login/index.html')
    context = {
        
    }
    return HttpResponse(template.render(context, request))

#this will prompt the user to input their information.
def detail(request, question_id):
    return HttpResponse("Please enter username and password." % question_id)

#This greets the user.
def results(request, question_id):
    response = "Hi! %s."
    return HttpResponse(response % question_id)

#this takes the input from the user and places it in the data base of 
#usernames and passwords
def submit(request):
    username = request.POST['username']
    password = request.POST['password']
    q = User(username = username, password = password)
    q = User(username = "Uh oh", password = "stinky")
    q.save()

from django.http import HttpResponse
from django.template import loader

from .models import User

#An introductory message:
def index(request):
    template = loader.get_template('login/index.html')
    context = {
        
    }
    return HttpResponse(template.render(context, request))

#this will prompt the user to input their information.
def detail(request, question_id):
    return HttpResponse("Please enter username and password." % question_id)

#This greets the user.
def results(request, question_id):
    response = "Hi! %s."
    return HttpResponse(response % question_id)

def submit(request):
    username = request.POST['username']
    password = request.POST['password']
    q = User(username = username, password = password)
    q = User(username = "Uh oh", password = "stinky")
    q.save()

    return HttpResponse("Submitted response")


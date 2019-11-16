from django.urls import path

from. import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    # ex: /polls/5/
    path('login', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('login/results/', views.results, name='results'),
    #Submitting name and password:
    path('submit/', views.submit, name='submit')
]
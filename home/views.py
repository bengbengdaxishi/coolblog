from django.shortcuts import render
from django.http import HttpResponse
from home.models import Article
from django.shortcuts import get_object_or_404

# Create your views here.

def index(request):
    articles = Article.objects.all().order_by('-created_time')
    return render(request,'home/index.html',{
        'title':'hello',
        'text':'welcome',
        'articles':articles

    })


def detail(request,id):
    article = get_object_or_404(Article,pk=id)
    return render(request,'home/article.html',{
        'article':article
    })
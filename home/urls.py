from django.conf.urls import url
from home import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^article/(?P<id>\d+)/$',views.detail,name='detail')
]
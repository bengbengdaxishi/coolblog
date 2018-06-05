from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=50,verbose_name="分类名")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '分类'
        verbose_name_plural = '分类列表'


class Tag(models.Model):
    name = models.CharField(max_length=50,verbose_name="标签名")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '标签'
        verbose_name_plural = '标签列表'


class Article(models.Model):
    title = models.CharField(max_length=70,verbose_name="文章标题")
    body = models.TextField(verbose_name="文章内容",default="")
    created_time = models.DateTimeField(verbose_name="创建时间")
    modified_time = models.DateTimeField(verbose_name="修改时间")
    excerpt = models.CharField(max_length=200,blank=True,verbose_name="摘要")
    category = models.ForeignKey(Category,verbose_name="分类")
    tags = models.ManyToManyField(Tag,blank=True,verbose_name=u"标签")
    author = models.ForeignKey(User,verbose_name="作者")
    views = models.PositiveIntegerField(default=0,verbose_name="浏览量")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = '文章'
        verbose_name_plural = '文章列表'
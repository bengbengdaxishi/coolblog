from django.contrib import admin
from home.models import Category,Tag,Article
# Register your models here.




class ArticleAdmin(admin.ModelAdmin):
    list_display = ['title','created_time','modified_time','category','author','getTagsName']

    def getTagsName(self,obj):
        tag_name=''
        for tag in obj.tags.all():
            tag_name += tag.name+''
            return tag_name

    getTagsName.short_description = '标签'


admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Article,ArticleAdmin)
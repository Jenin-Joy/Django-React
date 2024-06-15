from django.urls import path
from Guest import views

urlpatterns = [
    path('user/',views.user,name='user'),   
    path('ajaxplace/<int:id>',views.ajaxplace,name='ajaxplace'),
    path('shop/',views.shop,name='shop'),
    path('login/',views.login,name='login'),
]
from django.urls import path
from Shop import views

urlpatterns = [
    path('profile/<int:id>',views.profile,name='profile'),
]
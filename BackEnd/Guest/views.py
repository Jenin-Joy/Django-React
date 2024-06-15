from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from Guest.serializers import *
from rest_framework.response import Response
from Guest.models import *
from Admin.models import tbl_admin
from Admin.serializers import SelectPlaceSerializer
# Create your views here.

@permission_classes([AllowAny])

@api_view(['POST'])
def user(request):
    if request.method == 'POST':
        data = UserSerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Registred successfully"}, status=201)
        else:
            return Response({"msg":"Invalid data"}, status=400)

@api_view(['GET'])
def ajaxplace(request, id):
    if request.method == 'GET':
        serializer = SelectPlaceSerializer(tbl_place.objects.filter(district=id), many=True)
        return Response(serializer.data, status=201)

@api_view(['POST'])
def shop(request):
    if request.method == 'POST':
        data = ShopSerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Registred successfully"}, status=201)
        else:
            return Response({"msg":"Invalid data"}, status=400)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        usercount = tbl_user.objects.filter(user_email=request.data.get('email'),user_password=request.data.get('password')).count()
        shopcount = tbl_shop.objects.filter(shop_email=request.data.get('email'),shop_password=request.data.get('password'),shop_status=1).count()
        admincount = tbl_admin.objects.filter(admin_email=request.data.get('email'),admin_password=request.data.get('password')).count()
        if usercount > 0:
            user = tbl_user.objects.get(user_email=request.data.get('email'),user_password=request.data.get('password'))
            token = {"userid": user.id}
            return Response(token, status=200)
        elif shopcount > 0:
            shop = tbl_shop.objects.get(shop_email=request.data.get('email'),shop_password=request.data.get('password'))
            token = {"shopid": shop.id}
            return Response(token, status=200)
        elif admincount > 0:
            admin = tbl_admin.objects.get(admin_email=request.data.get('email'),admin_password=request.data.get('password'))
            token = {"adminid": admin.id}
            return Response(token, status=200)
        else:
            return Response("Invalid Login")
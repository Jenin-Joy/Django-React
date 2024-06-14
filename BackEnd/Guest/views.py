from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from Guest.serializers import *
from rest_framework.response import Response
from Guest.models import *
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
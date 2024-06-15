from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from Shop.models import *
from Shop.serializers import *
# Create your views here.
@permission_classes([AllowAny])

@api_view(['GET'])
def profile(request, id):
    # print(id)
    if request.method == "GET":
        data = SelectShopProfile(tbl_shop.objects.get(id=id))
        return Response(data.data, status=200)
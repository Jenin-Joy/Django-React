from django.shortcuts import render
from Admin.models import *
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from Admin.serializers import *
from rest_framework.decorators import api_view, permission_classes
# Create your views here.
@permission_classes([AllowAny])

@api_view(['POST', 'GET'])
def district(request):
    if request.method == "GET":
        data = tbl_district.objects.all()
        serializer = DistrictSerializer(data, many=True)
        return Response(serializer.data, status=201)
    
    if request.method == "POST":
        data = DistrictSerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Data saved successfully"}, status=201)
        else:
            return Response(data.errors, status=400)

@api_view(['DELETE'])
def deletedistrict(request, id):
    if request.method == "DELETE":
        tbl_district.objects.get(id=id).delete()
        return Response({"msg":"Data deleted successfully"}, status=201)
    else:
        return Response({"msg":"Invalid request"}, status=400)

@api_view(['PUT', 'GET'])
def updatedistrict(request, id):
    if request.method == "GET":
        serializer = DistrictSerializer(tbl_district.objects.get(id=id))
        return Response(serializer.data, status=201)

    if request.method == "PUT":
        data = DistrictSerializer(tbl_district.objects.get(id=id), data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Data updated successfully"}, status=201)
        else:
            return Response(data.errors, status=400)

@api_view(['GET', 'POST'])
def category(request):
    if request.method == "GET":
        serializer = CategorySerializer(tbl_category.objects.all(), many=True)
        return Response(serializer.data, status=201)
    
    if request.method == "POST":
        data = CategorySerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Data saved successfully"}, status=201)
        else:
            return Response(data.errors, status=400)

@api_view(['DELETE'])
def deletecategory(request, id):
    if request.method == "DELETE":
        tbl_category.objects.get(id=id).delete()
        return Response({"msg":"Data deleted successfully"}, status=201)
    else:
        return Response({"msg":"Invalid request"}, status=400)

@api_view(['GET', 'PUT'])
def updatecategory(request,id):
    if request.method == "GET":
        serializer = CategorySerializer(tbl_category.objects.get(id=id))
        return Response(serializer.data, status=201)

    if request.method == "PUT":
        data = CategorySerializer(tbl_category.objects.get(id=id), data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Data updated successfully"}, status=201)
        else:
            return Response(data.errors, status=400)

@api_view(['GET', 'POST'])
def place(request):
    if request.method == "GET":
        serializer = SelectPlaceSerializer(tbl_place.objects.all(), many=True)
        return Response(serializer.data, status=201)
    
    if request.method == "POST":
        data = PlaceSerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Data saved successfully"}, status=201)
        else:
            return Response(data.errors, status=400)

@api_view(['DELETE'])
def deleteplace(request, id):
    if request.method == "DELETE":
        tbl_place.objects.get(id=id).delete()
        return Response({"msg":"Data deleted successfully"}, status=201)
    else:
        return Response({"msg":"Invalid request"}, status=400)

@api_view(['GET', 'PUT'])
def updateplace(request,id):
    if request.method == "GET":
        serializer = SelectPlaceSerializer(tbl_place.objects.get(id=id))
        return Response(serializer.data, status=201)

    if request.method == "PUT":
        data = PlaceSerializer(tbl_place.objects.get(id=id), data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Data updated successfully"}, status=201)
        else:
            return Response({"msg":"Data Not updated"}, status=400)

@api_view(['GET', 'POST'])
def subcategory(request):
    if request.method == "GET":
        serializer = SelectSubCategorySerializer(tbl_subcategory.objects.all(), many=True)
        return Response(serializer.data, status=201)
    
    if request.method == "POST":
        data = SubCategorySerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Data saved successfully"}, status=201)
        else:
            return Response(data.errors, status=400)

@api_view(['DELETE'])
def deletesubcategory(request, id):
    if request.method == "DELETE":
        tbl_subcategory.objects.get(id=id).delete()
        return Response({"msg":"Data deleted successfully"}, status=201)
    else:
        return Response({"msg":"Invalid request"}, status=400)

@api_view(['GET', 'PUT'])
def updatesubcategory(request,id):
    if request.method == "GET":
        serializer = SelectSubCategorySerializer(tbl_subcategory.objects.get(id=id))
        return Response(serializer.data, status=201)

    if request.method == "PUT":
        data = SubCategorySerializer(tbl_subcategory.objects.get(id=id), data=request.data)
        if data.is_valid():
            data.save()
            return Response({"msg":"Data updated successfully"}, status=201)
        else:
            return Response({"msg":"Data Not updated"}, status=400)

@api_view(['GET'])
def user(request):
    if request.method == "GET":
        serializer = SelectUserSerializer(tbl_user.objects.all(), many=True)
        return Response(serializer.data, status=201)
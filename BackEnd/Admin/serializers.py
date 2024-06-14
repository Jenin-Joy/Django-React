from rest_framework import serializers
from Admin.models import *
from Guest.models import tbl_user
class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = tbl_district
        fields = ['id', 'district_name']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = tbl_category
        fields = ['id', 'category_name']

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = tbl_place
        fields = ['id', 'place_name', 'district']

class SelectPlaceSerializer(serializers.ModelSerializer):
    district = DistrictSerializer()
    class Meta:
        model = tbl_place
        fields = ['id', 'place_name', 'district']

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = tbl_subcategory
        fields = ['id', 'subcategory_name', 'category']

class SelectSubCategorySerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = tbl_subcategory
        fields = ['id', 'subcategory_name', 'category']

class SelectUserSerializer(serializers.ModelSerializer):
    place = SelectPlaceSerializer()
    class Meta:
        model = tbl_user
        fields = ['id', 'user_name', 'user_email', 'user_contact', 'user_password', 'user_address', 'place', 'user_photo']
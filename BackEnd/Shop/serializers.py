from rest_framework import serializers
from Shop.models import *
from Guest.models import tbl_shop
from Admin.serializers import SelectPlaceSerializer
class SelectShopProfile(serializers.ModelSerializer):
    place = SelectPlaceSerializer()
    class Meta:
        model = tbl_shop
        fields = ['id', 'shop_name', 'shop_email', 'shop_password', 'shop_contact', 'shop_address', 'place', 'shop_photo', 'shop_proof']
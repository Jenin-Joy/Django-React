from rest_framework import serializers
from Guest.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = tbl_user
        fields = ['id', 'user_name', 'user_email', 'user_password', 'user_contact', 'user_address', 'place', 'user_photo']

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = tbl_shop
        fields = ['id', 'shop_name', 'shop_email', 'shop_password', 'shop_contact', 'shop_address', 'place', 'shop_photo', 'shop_proof']
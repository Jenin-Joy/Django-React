from django.urls import path
from Admin import views

urlpatterns = [
    path('district/',views.district,name="district"),
    path('deletedistrict/<int:id>',views.deletedistrict,name="deletedistrict"),
    path('updatedistrict/<int:id>',views.updatedistrict,name="updatedistrict"),

    path('category/',views.category,name="category"),
    path('deletecategory/<int:id>',views.deletecategory,name="deletecategory"),
    path('updatecategory/<int:id>',views.updatecategory,name="updatecategory"),

    path('place/',views.place,name="place"),
    path('deleteplace/<int:id>',views.deleteplace,name="deleteplace"),
    path('updateplace/<int:id>',views.updateplace,name="updateplace"),

    path('subcategory/',views.subcategory,name="subcategory"),
    path('deletesubcategory/<int:id>',views.deletesubcategory,name="deletesubcategory"),
    path('updatesubcategory/<int:id>',views.updatesubcategory,name="updatesubcategory"),

    path('user/',views.user,name="user"),

    path('shop/',views.shop,name="shop"),
    path('verifyshop/<int:id>/<int:status>',views.verifyshop,name="verifyshop"),
    path('approvedshop/',views.approvedshop,name="approvedshop"),
    path('rejectedshop/',views.rejectedshop,name="rejectedshop"),
]
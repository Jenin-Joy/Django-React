# Generated by Django 5.0.6 on 2024-06-14 06:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0004_tbl_subcategory'),
        ('Guest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='tbl_shop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shop_name', models.CharField(max_length=30)),
                ('shop_email', models.CharField(max_length=30)),
                ('shop_phone', models.CharField(max_length=30)),
                ('shop_address', models.CharField(max_length=30)),
                ('shop_password', models.CharField(max_length=30)),
                ('shop_photo', models.FileField(upload_to='Assets/Shop/')),
                ('shop_proof', models.FileField(upload_to='Assets/Shop/')),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Admin.tbl_place')),
            ],
        ),
    ]

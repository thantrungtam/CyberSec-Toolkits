from django.contrib import admin
from django.urls import path
from . import views
from . import api

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Direct API endpoints (formerly templates)
    path('', views.Home, name='home'),
    path('hex-to-ascii/', views.HexToAscii, name="hex-to-ascii"),
    path('ascii-to-hex/', views.AsciiToHex, name="ascii-to-hex"),
    path('hex-to-decimal/', views.HexToDecimal, name="hex-to-decimal"),
    path('decimal-to-hex/', views.DecimalToHex, name="decimal-to-hex"),
    path('base64-encode/', views.Base64Encode, name="base64-encode"),
    path('base64-decode/', views.Base64Decode, name="base64-decode"),
    path('ascii-table/', views.AsciiTable, name="ascii-table"),
    path('general-conversion/', views.GeneralConversion, name="general-conversion"),
    path('xor-calculator/', views.XorCalculator, name="xor-calculator"),
    
    # API endpoints
    path('api/hex-to-ascii/', api.hex_to_ascii, name="api-hex-to-ascii"),
    path('api/ascii-to-hex/', api.ascii_to_hex, name="api-ascii-to-hex"),
    path('api/base64-encode/', api.base64_encode, name="api-base64-encode"),
    path('api/base64-decode/', api.base64_decode, name="api-base64-decode"),
    path('api/general-conversion/', api.general_conversion, name="api-general-conversion"),
    path('api/xor-calculator/', api.xor_calculator, name="api-xor-calculator"),
]
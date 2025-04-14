from rest_framework import serializers

class ConversionSerializer(serializers.Serializer):
    input = serializers.CharField(required=True)
    input_type = serializers.ChoiceField(choices=['Binary', 'Hexadecimal', 'Decimal', 'Ascii'], required=False)
    output_type = serializers.ChoiceField(choices=['Binary', 'Hexadecimal', 'Decimal', 'Ascii'], required=False)

class Base64Serializer(serializers.Serializer):
    input = serializers.CharField(required=True)

class XorCalculatorSerializer(serializers.Serializer):
    input1 = serializers.CharField(required=True)
    input2 = serializers.CharField(required=True) 
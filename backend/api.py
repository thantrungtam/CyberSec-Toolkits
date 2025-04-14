from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .serializers import ConversionSerializer, Base64Serializer, XorCalculatorSerializer
import base64

@api_view(['POST'])
@permission_classes([AllowAny])
def hex_to_ascii(request):
    input_str = request.data.get('input', '')
    input_str = input_str.replace(' ', '').replace('/', '').replace('0x', '').replace('\t', '')
    
    output = ""
    error = None
    
    for i in range(0, len(input_str), 2):
        if len(input_str) == 1:
            try:
                hex_value = int(input_str[i], 16)
                if 0 <= hex_value <= 15:
                    output += chr(hex_value)
                    continue
            except ValueError:
                output += " "
                error = "Error - Some data was invalid and was skipped"
                continue
        else:
            try:
                hex_value = int(input_str[i] + input_str[i + 1], 16)
                if hex_value <= 127:
                    output += chr(hex_value)
                else:
                    raise ValueError
            except ValueError:
                output += " "
                error = "Error - Some data was invalid and was skipped"
                continue
            except IndexError:
                try:
                    hex_value = int(input_str[i], 16)
                    if 0 <= hex_value <= 15:
                        output += chr(hex_value)
                        continue
                except ValueError:
                    output += " "
                    error = "Error - Some data was invalid and was skipped"
                    continue
    
    return Response({'input': request.data.get('input'), 'output': output, 'error': error})

@api_view(['POST'])
@permission_classes([AllowAny])
def ascii_to_hex(request):
    input_str = request.data.get('input', '')
    output = ""
    
    for char in input_str:
        output += format(ord(char), '2x') + " "
    
    return Response({'input': input_str, 'output': output.strip()})

@api_view(['POST'])
@permission_classes([AllowAny])
def base64_encode(request):
    serializer = Base64Serializer(data=request.data)
    if serializer.is_valid():
        input_str = serializer.validated_data['input']
        try:
            output = base64.b64encode(input_str.encode("utf-8")).decode("utf-8")
            return Response({'input': input_str, 'output': output})
        except:
            return Response({'input': input_str, 'error': "Error - couldn't convert data"})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def base64_decode(request):
    serializer = Base64Serializer(data=request.data)
    if serializer.is_valid():
        input_str = serializer.validated_data['input']
        try:
            output = base64.b64decode(input_str).decode("utf-8")
            return Response({'input': input_str, 'output': output})
        except:
            return Response({'input': input_str, 'error': "Error - couldn't convert data"})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def general_conversion(request):
    serializer = ConversionSerializer(data=request.data)
    if serializer.is_valid():
        input_str = serializer.validated_data['input']
        input_type = serializer.validated_data.get('input_type', 'Decimal')
        
        result = {}
        try:
            if input_type == "Binary":
                decimal_value = int(input_str, 2)
                result = {
                    'binary': input_str,
                    'hexadecimal': hex(decimal_value),
                    'decimal': decimal_value,
                    'ascii': chr(decimal_value) if decimal_value < 128 else None
                }
            elif input_type == "Hexadecimal":
                decimal_value = int(input_str, 16)
                result = {
                    'binary': format(decimal_value, 'b'),
                    'hexadecimal': input_str,
                    'decimal': decimal_value,
                    'ascii': chr(decimal_value) if decimal_value < 128 else None
                }
            elif input_type == "Decimal":
                decimal_value = int(input_str)
                result = {
                    'binary': format(decimal_value, 'b'),
                    'hexadecimal': hex(decimal_value),
                    'decimal': decimal_value,
                    'ascii': chr(decimal_value) if decimal_value < 128 else None
                }
            elif input_type == "Ascii":
                if len(input_str) != 1:
                    return Response({'error': 'For ASCII input, please provide a single character'}, 
                                  status=status.HTTP_400_BAD_REQUEST)
                decimal_value = ord(input_str)
                result = {
                    'binary': format(decimal_value, 'b'),
                    'hexadecimal': format(decimal_value, 'x'),
                    'decimal': decimal_value,
                    'ascii': input_str
                }
            return Response({'input': input_str, 'input_type': input_type, 'result': result})
        except Exception as e:
            return Response({'input': input_str, 'error': f"Error - {str(e)}"})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def xor_calculator(request):
    serializer = XorCalculatorSerializer(data=request.data)
    if serializer.is_valid():
        input1 = serializer.validated_data['input1']
        input2 = serializer.validated_data['input2']
        
        input1_values = input1.split()
        output = []
        error = None
        
        try:
            input2_value = int(input2)
            for value in input1_values:
                if value:
                    output.append(str(int(value) ^ input2_value))
            return Response({
                'input1': input1,
                'input2': input2,
                'output': ' '.join(output)
            })
        except:
            return Response({
                'input1': input1,
                'input2': input2,
                'error': "Error - encountered problem whilst calculating"
            })
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
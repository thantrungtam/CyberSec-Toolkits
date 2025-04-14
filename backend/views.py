from ast import parse
from sys import hexversion
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
import base64

def Home(request):
    return JsonResponse({"message": "Cybersecurity Toolkit API"})

def HexToAscii(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            input = data.get("input", "")
            input = input.replace(' ', '')
            input = input.replace('/', '')
            input = input.replace('0x', '')
            input = input.replace('\t', '')
            
            output = ""
            error = None
            for i in range(0, len(input), 2):
                if len(input) == 1:
                    try:
                        hexValue = int(input[i], 16)
                        if hexValue >= 0 and hexValue <= 15:
                            output += chr(hexValue)
                            continue
                    except ValueError:
                        output += " "
                        error = "Error - Some data was invalid and was skipped"
                        continue
                else:
                    try:
                        hexValue = int(input[i] + input[i + 1], 16)
                        if hexValue <= 127:
                            output += chr(hexValue)
                        else:
                            raise ValueError
                    except ValueError:
                        output += " "
                        error = "Error - Some data was invalid and was skipped"
                        continue
                    except IndexError:
                        try:
                            hexValue = int(input[i], 16)
                            if hexValue >= 0 and hexValue <= 15:
                                output += chr(hexValue)
                                continue
                        except ValueError:
                            output += " "
                            error = "Error - Some data was invalid and was skipped"
                            continue
            return JsonResponse({"output": output, "error": error})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)

def AsciiToHex(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            input = data.get("input", "")
            output = ""
            for i in range(0, len(input)):
                output += format(ord(input[i]), '2x')
                output += " "
            return JsonResponse({"output": output})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)

def HexToDecimal(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            input = data.get("input", "")
            try:
                output = int(input, 16)
                return JsonResponse({"output": output})
            except:
                return JsonResponse({"error": "Error - couldn't convert data"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)

def DecimalToHex(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            input = data.get("input", "")
            try:
                output = hex(int(input))
                return JsonResponse({"output": output})
            except:
                return JsonResponse({"error": "Error - couldn't convert data"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)

def Base64Encode(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            input = data.get("input", "")
            try:
                output = base64.b64encode(input.encode("utf-8"))
                output = str(output, "utf-8")
                return JsonResponse({"output": output})
            except:
                return JsonResponse({"error": "Error - couldn't convert data"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)

def Base64Decode(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            input = data.get("input", "")
            try:
                output = base64.b64decode(input)
                output = str(output, "utf-8")
                return JsonResponse({"output": output})
            except:
                return JsonResponse({"error": "Error - couldn't convert data"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)

def AsciiTable(request):
    return JsonResponse({"message": "ASCII Table API"})

def GeneralConversion(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            input = data.get("input", "")
            input_type = data.get("input_type", "")
            
            result = {}
            
            if input_type == "Binary":
                try:
                    binary_output = input
                    hex_output = hex(int(input, 2))
                    decimal_output = int(input, 2)
                    ascii_output = chr(int(input, 2))
                    
                    result = {
                        "binary": binary_output,
                        "hexadecimal": hex_output,
                        "decimal": decimal_output,
                        "ascii": ascii_output
                    }
                except:
                    return JsonResponse({"error": "Error - data was too large or incorrect"}, status=400)
            elif input_type == "Hexadecimal":
                try:
                    binary_output = format(int(input, 16), 'b')
                    hex_output = input
                    decimal_output = int(input, 16)
                    ascii_output = chr(int(input, 16))
                    
                    result = {
                        "binary": binary_output,
                        "hexadecimal": hex_output,
                        "decimal": decimal_output,
                        "ascii": ascii_output
                    }
                except:
                    return JsonResponse({"error": "Error - data was too large or incorrect"}, status=400)
            elif input_type == "Decimal":
                try:
                    binary_output = format(int(input, 10), 'b')
                    hex_output = hex(int(input))
                    decimal_output = input
                    ascii_output = chr(int(input, 10))
                    
                    result = {
                        "binary": binary_output,
                        "hexadecimal": hex_output,
                        "decimal": decimal_output,
                        "ascii": ascii_output
                    }
                except:
                    return JsonResponse({"error": "Error - data was too large or incorrect"}, status=400)
            elif input_type == "Ascii":
                try:
                    binary_output = format(ord(input), 'b')
                    hex_output = format(ord(input), 'x')
                    decimal_output = ord(input)
                    ascii_output = input
                    
                    result = {
                        "binary": binary_output,
                        "hexadecimal": hex_output,
                        "decimal": decimal_output,
                        "ascii": ascii_output
                    }
                except:
                    return JsonResponse({"error": "Error - data was too large or incorrect"}, status=400)
            
            return JsonResponse({"result": result})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)

def XorCalculator(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            input1 = data.get("input1", "")
            input2 = data.get("input2", "")
            
            input1_values = input1.split(" ")
            output = ""
            error = None
            
            for value in input1_values:
                if value.strip() == "":
                    continue
                try:
                    result = int(value) ^ int(input2)
                    output += str(result) + " "
                except:
                    output += " "
                    error = "Error - encountered problem whilst calculating"
            
            return JsonResponse({"output": output, "error": error})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Method not allowed"}, status=405)
import axios from 'axios';

const API_URL = '/api';

export const calculateXOR = async (input1: string, input2: string): Promise<{ result: string; error: string }> => {
  try {
    const response = await axios.post(`${API_URL}/xor-calculator/`, { input1, input2 });
    if (response.data.error) {
      return { result: '', error: response.data.error };
    }
    return { result: response.data.output, error: '' };
  } catch (err) {
    return { result: '', error: err instanceof Error ? err.message : 'An error occurred' };
  }
};

export const base64Encode = async (input: string): Promise<{ result: string; error: string }> => {
  try {
    if (!input) {
      throw new Error('Please enter text to encode');
    }
    const response = await axios.post(`${API_URL}/base64-encode/`, { input });
    if (response.data.error) {
      return { result: '', error: response.data.error };
    }
    return { result: response.data.output, error: '' };
  } catch (err) {
    return { result: '', error: err instanceof Error ? err.message : 'An error occurred' };
  }
};

export const base64Decode = async (input: string): Promise<{ result: string; error: string }> => {
  try {
    if (!input) {
      throw new Error('Please enter text to decode');
    }
    const response = await axios.post(`${API_URL}/base64-decode/`, { input });
    if (response.data.error) {
      return { result: '', error: response.data.error };
    }
    return { result: response.data.output, error: '' };
  } catch (err) {
    return { result: '', error: err instanceof Error ? err.message : 'An error occurred' };
  }
};

export const hexToDecimal = async (input: string): Promise<{ result: string; error: string }> => {
  try {
    if (!input) {
      throw new Error('Please enter a hexadecimal number');
    }
    const response = await axios.post(`${API_URL}/general-conversion/`, { 
      input, 
      input_type: 'Hexadecimal'
    });
    if (response.data.error) {
      return { result: '', error: response.data.error };
    }
    return { result: response.data.result.decimal.toString(), error: '' };
  } catch (err) {
    return { result: '', error: err instanceof Error ? err.message : 'An error occurred' };
  }
};

export const decimalToHex = async (input: string): Promise<{ result: string; error: string }> => {
  try {
    if (!input) {
      throw new Error('Please enter a decimal number');
    }
    const response = await axios.post(`${API_URL}/general-conversion/`, { 
      input, 
      input_type: 'Decimal'
    });
    if (response.data.error) {
      return { result: '', error: response.data.error };
    }
    return { result: response.data.result.hexadecimal.replace('0x', ''), error: '' };
  } catch (err) {
    return { result: '', error: err instanceof Error ? err.message : 'An error occurred' };
  }
};

export const hexToAscii = async (input: string): Promise<{ result: string; error: string }> => {
  try {
    if (!input) {
      throw new Error('Please enter hexadecimal text');
    }
    const response = await axios.post(`${API_URL}/hex-to-ascii/`, { input });
    if (response.data.error) {
      return { result: response.data.output, error: response.data.error };
    }
    return { result: response.data.output, error: '' };
  } catch (err) {
    return { result: '', error: err instanceof Error ? err.message : 'An error occurred' };
  }
};

export const asciiToHex = async (input: string): Promise<{ result: string; error: string }> => {
  try {
    if (!input) {
      throw new Error('Please enter ASCII text');
    }
    const response = await axios.post(`${API_URL}/ascii-to-hex/`, { input });
    return { result: response.data.output, error: '' };
  } catch (err) {
    return { result: '', error: err instanceof Error ? err.message : 'An error occurred' };
  }
}; 
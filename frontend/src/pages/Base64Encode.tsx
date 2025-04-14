import React from 'react';
import CalculatorTool from '../components/CalculatorTool';
import { base64Encode } from '../services/calculatorService';

const Base64EncodePage: React.FC = () => {
  return (
    <CalculatorTool
      title="Base64 Encode"
      inputLabel="Plain Text Input"
      outputLabel="Base64 Result"
      buttonText="Encode"
      onCalculate={base64Encode}
      placeholder="Enter text to encode"
      multiline={true}
      rows={4}
    />
  );
};

export default Base64EncodePage; 
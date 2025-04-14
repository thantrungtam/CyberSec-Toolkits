import React from 'react';
import CalculatorTool from '../components/CalculatorTool';
import { base64Decode } from '../services/calculatorService';

const Base64DecodePage: React.FC = () => {
  return (
    <CalculatorTool
      title="Base64 Decode"
      inputLabel="Base64 Input"
      outputLabel="Decoded Result"
      buttonText="Decode"
      onCalculate={base64Decode}
      placeholder="Enter Base64 encoded text"
      multiline={true}
      rows={4}
    />
  );
};

export default Base64DecodePage; 
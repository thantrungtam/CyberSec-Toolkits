import React from 'react';
import CalculatorTool from '../components/CalculatorTool';
import { decimalToHex } from '../services/calculatorService';

const DecimalToHexPage: React.FC = () => {
  return (
    <CalculatorTool
      title="Decimal To Hex"
      inputLabel="Decimal Input"
      outputLabel="Hexadecimal Result"
      buttonText="Convert"
      onCalculate={decimalToHex}
      placeholder="Enter decimal number (e.g. 42)"
    />
  );
};

export default DecimalToHexPage; 
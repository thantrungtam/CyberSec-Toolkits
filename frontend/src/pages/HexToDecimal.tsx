import React from 'react';
import CalculatorTool from '../components/CalculatorTool';
import { hexToDecimal } from '../services/calculatorService';

const HexToDecimalPage: React.FC = () => {
  return (
    <CalculatorTool
      title="Hex To Decimal"
      inputLabel="Hexadecimal Input"
      outputLabel="Decimal Result"
      buttonText="Convert"
      onCalculate={hexToDecimal}
      placeholder="Enter hexadecimal number (e.g. 1A)"
    />
  );
};

export default HexToDecimalPage; 
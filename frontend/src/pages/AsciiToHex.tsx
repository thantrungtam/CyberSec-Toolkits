import React from 'react';
import CalculatorTool from '../components/CalculatorTool';
import { asciiToHex } from '../services/calculatorService';

const AsciiToHexPage: React.FC = () => {
  return (
    <CalculatorTool
      title="ASCII To Hex"
      inputLabel="ASCII Input"
      outputLabel="Hexadecimal Result"
      buttonText="Convert"
      onCalculate={asciiToHex}
      placeholder="Enter ASCII text (e.g. Hello)"
      multiline={true}
      rows={4}
    />
  );
};

export default AsciiToHexPage; 
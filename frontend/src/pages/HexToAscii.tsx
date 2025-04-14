import React from 'react';
import CalculatorTool from '../components/CalculatorTool';
import { hexToAscii } from '../services/calculatorService';

const HexToAsciiPage: React.FC = () => {
  return (
    <CalculatorTool
      title="Hex To ASCII"
      inputLabel="Hexadecimal Input"
      outputLabel="ASCII Result"
      buttonText="Convert"
      onCalculate={hexToAscii}
      placeholder="Enter hexadecimal values (e.g. 48 65 6c 6c 6f)"
      multiline={true}
      rows={4}
    />
  );
};

export default HexToAsciiPage; 
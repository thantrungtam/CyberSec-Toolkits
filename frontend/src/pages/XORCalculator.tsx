import React from 'react';
import { calculateXOR } from '../services/calculatorService';
import TwoInputCalculatorTool from '../components/TwoInputCalculatorTool';

const XORCalculator: React.FC = () => {
  return (
    <TwoInputCalculatorTool
      title="XOR Calculator"
      input1Label="First Value"
      input2Label="Second Value (XOR key)"
      outputLabel="XOR Result"
      buttonText="Calculate XOR"
      onCalculate={calculateXOR}
      placeholder1="e.g. 5 or 50 45 30"
      placeholder2="e.g. 3"
    />
  );
};

export default XORCalculator; 
import React, { useState } from 'react';
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
  Fade,
  Grow,
  Zoom,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    transition: 'all 0.2s ease-in-out',
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.1)',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.2),
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 8px rgba(25, 118, 210, 0.2)',
  },
}));

const ResultPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '8px',
  background: 'linear-gradient(145deg, #f8f9fa, #ffffff)',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  transition: 'all 0.2s ease-in-out',
}));

interface TwoInputCalculatorToolProps {
  title: string;
  input1Label: string;
  input2Label: string;
  outputLabel: string;
  buttonText: string;
  onCalculate: (input1: string, input2: string) => Promise<{ result: string; error: string }>;
  placeholder1?: string;
  placeholder2?: string;
}

const TwoInputCalculatorTool: React.FC<TwoInputCalculatorToolProps> = ({
  title,
  input1Label,
  input2Label,
  outputLabel,
  buttonText,
  onCalculate,
  placeholder1 = '',
  placeholder2 = '',
}) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = async () => {
    setShowResult(false);
    try {
      const result = await onCalculate(input1, input2);
      setOutput(result.result);
      setError(result.error);
      setShowResult(true);
    } catch (err) {
      setError('An unexpected error occurred');
      setOutput('');
      setShowResult(true);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, px: 2 }}>
      <Fade in timeout={600}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ 
            fontWeight: 500,
            color: 'primary.main',
            mb: 3,
          }}
        >
          {title}
        </Typography>
      </Fade>
      
      <Grow in timeout={800}>
        <StyledCard>
          <StyledTextField
            fullWidth
            label={input1Label}
            variant="outlined"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder={placeholder1}
          />
          
          <StyledTextField
            fullWidth
            label={input2Label}
            variant="outlined"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder={placeholder2}
          />

          <StyledButton
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            sx={{ mb: 2 }}
          >
            {buttonText}
          </StyledButton>

          {error && (
            <Zoom in timeout={300}>
              <Alert 
                severity="error" 
                sx={{ 
                  mb: 2,
                  borderRadius: '8px',
                }}
              >
                {error}
              </Alert>
            </Zoom>
          )}

          {showResult && (
            <Zoom in timeout={400}>
              <ResultPaper elevation={0}>
                <Typography 
                  variant="subtitle1" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 500,
                    color: 'text.secondary',
                    mb: 1
                  }}
                >
                  {outputLabel}
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={output}
                  InputProps={{
                    readOnly: true,
                  }}
                  placeholder="Result will appear here"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(0, 0, 0, 0.02)',
                      borderRadius: '8px',
                    },
                  }}
                />
              </ResultPaper>
            </Zoom>
          )}
        </StyledCard>
      </Grow>
    </Box>
  );
};

export default TwoInputCalculatorTool; 
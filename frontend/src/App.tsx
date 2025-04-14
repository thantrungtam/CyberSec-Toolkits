import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import XORCalculator from './pages/XORCalculator';
import HexToDecimalPage from './pages/HexToDecimal';
import DecimalToHexPage from './pages/DecimalToHex';
import HexToAsciiPage from './pages/HexToAscii';
import AsciiToHexPage from './pages/AsciiToHex';
import Base64EncodePage from './pages/Base64Encode';
import Base64DecodePage from './pages/Base64Decode';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
      light: '#757de8',
      dark: '#002984',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
      dark: '#c51162',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a237e',
      secondary: '#424242',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 500,
      fontSize: '1.75rem',
      color: '#1a237e',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(63, 81, 181, 0.2)',
          },
        },
        contained: {
          backgroundColor: '#3f51b5',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#002984',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#ffffff',
            '&:hover fieldset': {
              borderColor: '#3f51b5',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3f51b5',
            },
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        standardError: {
          backgroundColor: '#ffebee',
          color: '#c62828',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HexToDecimalPage />} />
            <Route path="/hex-to-decimal" element={<HexToDecimalPage />} />
            <Route path="/decimal-to-hex" element={<DecimalToHexPage />} />
            <Route path="/hex-to-ascii" element={<HexToAsciiPage />} />
            <Route path="/ascii-to-hex" element={<AsciiToHexPage />} />
            <Route path="/base64-encode" element={<Base64EncodePage />} />
            <Route path="/base64-decode" element={<Base64DecodePage />} />
            <Route path="/xor-calculator" element={<XORCalculator />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

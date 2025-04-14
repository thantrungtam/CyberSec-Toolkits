import React, { useState } from 'react';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton, 
  IconButton,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(145deg, #3f51b5, #002984)',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const MainContent = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const drawerWidth = 240;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const tools = [
    { name: 'Hex to Decimal', path: '/hex-to-decimal' },
    { name: 'Decimal to Hex', path: '/decimal-to-hex' },
    { name: 'Hex to ASCII', path: '/hex-to-ascii' },
    { name: 'ASCII to Hex', path: '/ascii-to-hex' },
    { name: 'Base64 Encode', path: '/base64-encode' },
    { name: 'Base64 Decode', path: '/base64-decode' },
    { name: 'XOR Calculator', path: '/xor-calculator' },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {tools.map((tool) => (
          <ListItem key={tool.path} disablePadding>
            <ListItemButton 
              component={RouterLink} 
              to={tool.path}
              onClick={isMobile ? handleDrawerToggle : undefined}
            >
              <ListItemText primary={tool.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <StyledToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontWeight: 500 }}>
            Cybersecurity Toolkit
          </Typography>
        </StyledToolbar>
      </StyledAppBar>
      
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        
        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: '64px' // height of AppBar
        }}
      >
        <MainContent maxWidth="lg">
          {children}
        </MainContent>
      </Box>
    </Box>
  );
};

export default Layout; 
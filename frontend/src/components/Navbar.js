import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <FitnessCenterIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fitness Tracker
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/workouts">
            Workouts
          </Button>
          <Button color="inherit" component={RouterLink} to="/diet-plans">
            Diet Plans
          </Button>
          <Button color="inherit" component={RouterLink} to="/calorie-tracker">
            Calorie Tracker
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 
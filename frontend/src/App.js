import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Workouts from './pages/Workouts';
import DietPlans from './pages/DietPlans';
import CalorieTracker from './pages/CalorieTracker';
import WorkoutTimer from './pages/WorkoutTimer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/diet-plans" element={<DietPlans />} />
          <Route path="/calorie-tracker" element={<CalorieTracker />} />
          <Route path="/workout-timer" element={<WorkoutTimer />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
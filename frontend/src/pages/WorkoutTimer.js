import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function WorkoutTimer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { workout } = location.state || {};
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isResting, setIsResting] = useState(false);

  // Calculate total time for the workout
  const totalTime = workout?.exercises.reduce((total, exercise) => {
    if (exercise.duration) {
      const minutes = parseInt(exercise.duration);
      return total + (minutes * 60);
    }
    return total + 60; // Default 60 seconds for exercises without duration
  }, 0) || 0;

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      handleNextExercise();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < workout.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setIsResting(true);
      setTimeLeft(30); // 30 seconds rest between exercises
    } else {
      // Workout complete
      setIsRunning(false);
      navigate('/workouts');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentExercise = workout?.exercises[currentExerciseIndex];

  if (!workout) {
    return (
      <Container>
        <Typography variant="h5">No workout selected</Typography>
        <Button onClick={() => navigate('/workouts')}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate('/workouts')} sx={{ mr: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1">
          {workout.title}
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom>
            {isResting ? 'Rest Time' : currentExercise.name}
          </Typography>
          {currentExercise.sets && (
            <Typography variant="body1" color="text.secondary">
              {currentExercise.sets} sets × {currentExercise.reps} reps
            </Typography>
          )}
          <Typography variant="h2" sx={{ my: 3 }}>
            {formatTime(timeLeft)}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              color="primary"
              size="large"
              onClick={handleStartPause}
            >
              {isRunning ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              onClick={handleNextExercise}
            >
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Workout Progress
        </Typography>
        <List>
          {workout.exercises.map((exercise, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={exercise.name}
                  secondary={
                    exercise.sets
                      ? `${exercise.sets} sets × ${exercise.reps} reps`
                      : exercise.duration
                  }
                  sx={{
                    color: index === currentExerciseIndex
                      ? 'primary.main'
                      : index < currentExerciseIndex
                      ? 'text.secondary'
                      : 'text.primary'
                  }}
                />
              </ListItem>
              {index < workout.exercises.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default WorkoutTimer; 
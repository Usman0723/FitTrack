import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TimerIcon from '@mui/icons-material/Timer';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useNavigate } from 'react-router-dom';

function Workouts() {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const workoutCategories = [
    {
      id: 1,
      title: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      exercises: [
        { name: 'Bench Press', sets: 3, reps: 10, rest: '90s' },
        { name: 'Squats', sets: 4, reps: 12, rest: '120s' },
        { name: 'Deadlifts', sets: 3, reps: 8, rest: '180s' }
      ]
    },
    {
      id: 2,
      title: 'Cardio',
      image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      exercises: [
        { name: 'HIIT Circuit', duration: '20 min', intensity: 'High' },
        { name: 'Steady State Running', duration: '30 min', intensity: 'Medium' },
        { name: 'Jump Rope', duration: '15 min', intensity: 'High' }
      ]
    },
    {
      id: 3,
      title: 'Flexibility',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      exercises: [
        { name: 'Dynamic Stretching', duration: '10 min', focus: 'Full Body' },
        { name: 'Static Stretching', duration: '15 min', focus: 'Lower Body' },
        { name: 'Mobility Work', duration: '20 min', focus: 'Upper Body' }
      ]
    }
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleStartWorkout = (workout) => {
    navigate('/workout-timer', { state: { workout } });
  };

  // Get the current workout category based on selected tab
  const currentWorkout = workoutCategories[selectedTab];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Workout Programs
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="Strength Training" />
          <Tab label="Cardio" />
          <Tab label="Flexibility" />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={currentWorkout.image}
              alt={currentWorkout.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {currentWorkout.title}
              </Typography>
              <List>
                {currentWorkout.exercises.map((exercise, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <FitnessCenterIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={exercise.name}
                        secondary={
                          exercise.sets ? (
                            `${exercise.sets} sets × ${exercise.reps} reps (Rest: ${exercise.rest})`
                          ) : (
                            `${exercise.duration} - ${exercise.intensity || exercise.focus}`
                          )
                        }
                      />
                    </ListItem>
                    {index < currentWorkout.exercises.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => handleStartWorkout(currentWorkout)}
              >
                Start Workout
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Workouts; 
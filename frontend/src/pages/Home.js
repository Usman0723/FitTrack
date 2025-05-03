import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const workoutPlaylists = [
    {
      id: 1,
      title: 'Beginner Workouts',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Perfect for fitness beginners'
    },
    {
      id: 2,
      title: 'Advanced Training',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Challenging workouts for experienced fitness enthusiasts'
    },
    {
      id: 3,
      title: 'Yoga & Stretching',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Improve flexibility and mindfulness'
    }
  ];

  const dietPlans = [
    {
      id: 1,
      title: 'Weight Loss Plan',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Balanced diet for sustainable weight loss'
    },
    {
      id: 2,
      title: 'Muscle Building',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'High protein diet for muscle growth'
    },
    {
      id: 3,
      title: 'Maintenance Diet',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Maintain your current weight and health'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Workout Playlists Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Workout Playlists
        </Typography>
        <Grid container spacing={3}>
          {workoutPlaylists.map((playlist) => (
            <Grid item xs={12} sm={6} md={4} key={playlist.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={playlist.image}
                  alt={playlist.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {playlist.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {playlist.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => navigate('/workouts')}
                  >
                    View Workouts
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Diet Plans Section */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Diet Plans
        </Typography>
        <Grid container spacing={3}>
          {dietPlans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={plan.image}
                  alt={plan.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {plan.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {plan.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => navigate('/diet-plans')}
                  >
                    View Plan
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Home; 
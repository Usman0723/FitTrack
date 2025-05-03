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
  Divider,
  Chip
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function DietPlans() {
  const [selectedTab, setSelectedTab] = useState(0);

  const dietPlans = [
    {
      id: 1,
      title: 'Weight Loss Plan',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'A balanced diet plan focused on sustainable weight loss',
      meals: [
        {
          name: 'Breakfast',
          items: ['Oatmeal with berries', 'Greek yogurt', 'Green tea'],
          calories: 350
        },
        {
          name: 'Lunch',
          items: ['Grilled chicken salad', 'Quinoa', 'Mixed vegetables'],
          calories: 450
        },
        {
          name: 'Dinner',
          items: ['Baked salmon', 'Sweet potato', 'Steamed broccoli'],
          calories: 500
        }
      ],
      totalCalories: 1300
    },
    {
      id: 2,
      title: 'Muscle Building',
      image: 'https://pin.it/3D094v1vR',
      description: 'High protein diet plan for muscle growth and recovery',
      meals: [
        {
          name: 'Breakfast',
          items: ['Protein smoothie', 'Eggs and toast', 'Banana'],
          calories: 600
        },
        {
          name: 'Lunch',
          items: ['Lean beef', 'Brown rice', 'Vegetables'],
          calories: 700
        },
        {
          name: 'Dinner',
          items: ['Grilled chicken', 'Sweet potato', 'Avocado'],
          calories: 650
        }
      ],
      totalCalories: 1950
    },
    {
      id: 3,
      title: 'Maintenance Diet',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Balanced diet plan for maintaining current weight and health',
      meals: [
        {
          name: 'Breakfast',
          items: ['Whole grain toast', 'Avocado', 'Poached eggs'],
          calories: 450
        },
        {
          name: 'Lunch',
          items: ['Mediterranean bowl', 'Hummus', 'Pita bread'],
          calories: 550
        },
        {
          name: 'Dinner',
          items: ['Grilled fish', 'Quinoa', 'Roasted vegetables'],
          calories: 500
        }
      ],
      totalCalories: 1500
    }
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Get the current diet plan based on selected tab
  const currentPlan = dietPlans[selectedTab];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Diet Plans
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="Weight Loss" />
          <Tab label="Muscle Building" />
          <Tab label="Maintenance" />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={currentPlan.image}
              alt={currentPlan.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {currentPlan.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {currentPlan.description}
              </Typography>
              <Chip
                label={`Total Calories: ${currentPlan.totalCalories}`}
                color="primary"
                sx={{ mb: 2 }}
              />
              <List>
                {currentPlan.meals.map((meal, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <RestaurantIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={meal.name}
                        secondary={
                          <>
                            {meal.items.map((item, i) => (
                              <Typography
                                key={i}
                                variant="body2"
                                color="text.secondary"
                              >
                                • {item}
                              </Typography>
                            ))}
                            <Typography
                              variant="body2"
                              color="primary"
                              sx={{ mt: 1 }}
                            >
                              {meal.calories} calories
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    {index < currentPlan.meals.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Start This Plan
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DietPlans; 
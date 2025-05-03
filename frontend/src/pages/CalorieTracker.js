import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function CalorieTracker() {
  const [foodEntry, setFoodEntry] = useState({
    name: '',
    calories: '',
    category: ''
  });
  const [foodLog, setFoodLog] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const categories = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snacks',
    'Beverages'
  ];

  const handleChange = (e) => {
    setFoodEntry({
      ...foodEntry,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodEntry.name && foodEntry.calories && foodEntry.category) {
      setFoodLog([...foodLog, { ...foodEntry, id: Date.now() }]);
      setTotalCalories(totalCalories + Number(foodEntry.calories));
      setFoodEntry({ name: '', calories: '', category: '' });
    }
  };

  const handleDelete = (id, calories) => {
    setFoodLog(foodLog.filter(item => item.id !== id));
    setTotalCalories(totalCalories - Number(calories));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Calorie Tracker
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">
            Total Calories Today: {totalCalories}
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Food Item"
                name="name"
                value={foodEntry.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Calories"
                name="calories"
                type="number"
                value={foodEntry.calories}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={foodEntry.category}
                  onChange={handleChange}
                  label="Category"
                  required
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Add Food
          </Button>
        </form>

        <List sx={{ mt: 4 }}>
          {foodLog.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name}
                secondary={`${item.calories} calories - ${item.category}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(item.id, item.calories)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default CalorieTracker; 
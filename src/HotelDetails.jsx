import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { hotels } from './mockData';
import { Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

export default function HotelDetails() {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === Number(id));
  const navigate = useNavigate();

  if (!hotel) return <Typography>Hotel not found.</Typography>;

  const handleBook = () => {
    // In a real app, booking logic would go here
    alert('Booking successful! (mock)');
    navigate('/dashboard');
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ width: 400 }}>
        <CardMedia
          component="img"
          height="200"
          image={hotel.image}
          alt={hotel.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{hotel.name}</Typography>
          <Typography variant="body1">{hotel.location}</Typography>
          <Typography variant="body2" mb={2}>{hotel.description}</Typography>
          <Typography variant="h6" color="primary">${hotel.price} / night</Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleBook}>Book Now</Button>
        </CardContent>
      </Card>
    </Box>
  );
}

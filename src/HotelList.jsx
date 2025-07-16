import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { hotels } from './mockData';

export default function HotelList() {
  return (
    <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" mt={4}>
      {hotels.map(hotel => (
        <Card key={hotel.id} sx={{ width: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={hotel.image}
            alt={hotel.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {hotel.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {hotel.location}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              {hotel.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              ${hotel.price} / night
            </Typography>
            <Button component={Link} to={`/hotel/${hotel.id}`} variant="contained" sx={{ mt: 1 }}>
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

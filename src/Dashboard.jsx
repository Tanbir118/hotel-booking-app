import React from 'react';
import { useAuth } from './auth';
import { Typography, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ p: 4, minWidth: 300 }}>
        <Typography variant="h5" mb={2}>Welcome, {user?.username}!</Typography>
        <Typography mb={2}>This is your dashboard. (Bookings would be listed here.)</Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
      </Paper>
    </Box>
  );
}

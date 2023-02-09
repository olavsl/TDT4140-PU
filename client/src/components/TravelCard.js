import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

// This component is a card that contains information about a travel route. 
// Upon clicking on 'learn more', or possibly on the card itself, the travel card should be expanded, giving the user more functionality and information.

export const TravelCard = ({ travel }) => {
  return (
    <div style={{margin: '25%'}}>
        <Card variant = "outlined" sx={{ maxWidth: 345,
            bgcolor: "#f0f4c3" }}>
            <CardMedia sx={{bgcolor: "#fff"}}
                component="img"
                height="140"
                // image goes here
                // alt goes here
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" classname="travelTitle">
                    Trip Title
                </Typography>
                <Typography variant="body2" color="text.secondary" classname="travelShortDesc">
                    This is a short description of the trip: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </Typography>
     
                <Typography variant="body2" color="text.secondary" classname="travelDistance">
                    Distance: 6 km
                </Typography>
                <Typography variant="body2" color="text.secondary" classname="travelLocation">
                    County, Country
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Favorite</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>
  );
}

import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

// This component is a card that contains information about a travel route. 
// Upon clicking on 'learn more', or possibly on the card itself, the travel card should be expanded, giving the user more functionality and information.

const dummyData = {
    title: "A very long trip",
    start: "Lindesnes, Norway",
    end: "Nordkapp, Norway",
    price: 100,
    travelType: "Hike",
    distance: 1000,
    desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti."
}

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
                    {dummyData.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" classname="travelStartEnd">
                    {dummyData.start} - {dummyData.end}
                </Typography>
                <Typography variant="body2" color="text.secondary" classname="travelType">
                    {dummyData.travelType}
                </Typography>
                <Typography variant="body2" color="text.secondary" classname="travelDistance">
                    {dummyData.distance} km
                </Typography>
                <Typography variant="body2" color="text.secondary" classname="travelShortDesc">
                    {dummyData.desc}
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

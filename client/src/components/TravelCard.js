import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid, rgbToHex } from '@mui/material';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

// This component is a card that contains information about a travel route. 
// It will be used in the TravelList component.

// This dummydata will be replaced with data from the database, once it is up and running.
const dummyData1 = {
    title: "A very long trip",
    country: "Norway",
    start: "Lindesnes",
    end: "Nordkapp",
    price: 100,
    travelType: "Hike",
    distance: 1000,
    desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
    author: "User Userson"
}

// This MUI theme affects all elements in the card.
const cardTheme = createTheme({
    typography:{
        fontFamily: [
            "Georgia"
        ]

    }

});

export const TravelCard = ({ travel }) => {
    return (
        <ThemeProvider theme={cardTheme}>
            <div style={{margin: '0.8%'}}>
                <Card variant = "outlined" sx={{ maxWidth: '18.2vw', bgcolor: "#f0f4c3", border: 1, borderColor: "dark-gray"}}>
                    <CardActionArea>
                        <CardMedia sx={{bgcolor: "#fff"}} component="img" height="140"
                            image ="https://cdn.kimkim.com/files/a/images/bef90c6256a4f93a06d90a84f8e011d8e0e1d531/big-53e242f895dd59fcf99bba0efed27b8b.jpg"
                            alt ="Picture from the trip"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" classname="travelTitle"
                                sx={{
                                    mt: -1, 
                                    mb: -0.1, 
                                    textDecoration: "underline"
                                    }}>

                                {dummyData1.title}   

                            </Typography>
                            <Grid container direction="row" justifyContent="flex-start">
                                <Typography variant="body2" color="text.secondary" classname="travelStartEnd">

                                    {dummyData1.start} to {dummyData1.end}

                                </Typography>
                            </Grid>
                            <Divider />
                            <Typography variant="body2" color="text.secondary" classname="travelShortDesc"
                                sx={{
                                    fontStyle: 'italic' 
                                    }}>

                                {dummyData1.desc}

                            </Typography>
                            <Divider />
                            <Grid container direction = "row" justifyContent="flex-start"
                                sx={{
                                    mb: -0.5
                                    }}>
                                <Typography variant="body2" color="text.secondary" classname="travelAuthor" >

                                    By {dummyData1.author}

                                </Typography>
                            </Grid>

                            <Grid sx={{mt: 1, mb:-1}} container direction="row" justifyContent="space-evenly">
                                <Box sx={{
                                        border: 1,
                                        borderColor: "dark-gray",
                                        borderRadius: 1,
                                        px:0.5,
                                        bgcolor: "#A8D881",
                                    }}>
                                    <Typography variant="body2" color="text.secondary" classname="travelType">

                                        {dummyData1.travelType}

                                    </Typography>
                                </Box>
                                <Box sx = {{
                                        border: 1,
                                        borderColor: "dark-gray",
                                        borderRadius: 1,
                                        px:0.5,
                                        bgcolor: "#F2C077",
                                        }}>
                                    <Typography variant="body2" color="text.secondary" classname="travelDistance">

                                        {dummyData1.distance} km

                                    </Typography>
                                </Box>
                                <Box sx={{
                                    border: 1,
                                    borderColor: "dark-gray",
                                    borderRadius: 1,
                                    px:0.5,
                                    bgcolor: "#99DBE4",
                                    }}>
                                    <Typography variant="body2" color="text.secondary" classname="travelCountry">

                                        {dummyData1.country}

                                    </Typography>
                                </Box>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </ThemeProvider>
    );
}
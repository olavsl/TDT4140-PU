import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, DialogContent, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

// The travel card component is used to display all travels from the database in the feed. 
// Can be clicked on to open a diaog with more information about the specific travel of the card.
// Mapping from database is done in the feed component.
const cardTheme = createTheme({
    typography:{
        fontFamily: [
            "Georgia"
        ]
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const TravelCard = ({ travel }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
 
    return (
        <ThemeProvider theme={cardTheme}>
            <div style={{margin: '0.8%'}}>
                <Card variant = "outlined" sx={{height: '22vw', width: '18.2vw', bgcolor: "#f0f4c3", border: 1, borderColor: "dark-gray"}}>
                    <CardActionArea onClick={handleClickOpen}>
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

                                {travel.title}   

                            </Typography>
                            <Grid container direction="row" justifyContent="flex-start">
                                <Typography variant="body2" color="text.secondary" classname="travelStartEnd">

                                    {travel.startDestination} to {travel.endDestination}

                                </Typography>
                            </Grid>
                            <Divider />
                            <Typography variant="body2" color="text.secondary" classname="travelShortDesc"
                                sx={{
                                    fontStyle: 'italic' 
                                    }}>

                                {travel.description}

                            </Typography>
                            <Divider />
                            <Grid container direction = "row" justifyContent="flex-start"
                                sx={{
                                    mb: -0.5
                                    }}>
                                <Typography variant="body2" color="text.secondary" classname="travelAuthor" >

                                    By {travel.author}

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

                                        {travel.travelType}

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

                                        {travel.distance} km

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

                                        {travel.country}

                                    </Typography>
                                </Box>
                                <Box sx={{
                                    border: 1,
                                    borderColor: "dark-gray",
                                    borderRadius: 1,
                                    px:0.5,
                                    bgcolor: "#dbe892",
                                    }}>
                                    <Typography variant="body2" color="text.secondary" classname="travelCountry">

                                        {travel.price} kr

                                    </Typography>
                                </Box>
                            </Grid>
                        </CardContent>
                    </CardActionArea>

                    {/* This is the dialog opened upon clicking on 'Show More' */}
                    <Dialog
                        fullScreen
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{ position: 'relative', backgroundColor: '#DFC296' }}>
                        <Toolbar>
                            <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {travel.title}
                            </Typography>
                            <Typography>
                            By {travel.author}
                            </Typography>

                        </Toolbar>
                        </AppBar>

                        <Divider />
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            {travel.title}
                            
                        </Typography>
                        <Typography variant="body2" component="div" sx={{ p: 2 }}>
                            From {travel.startDestination} to {travel.endDestination}
                        </Typography>
                        <Divider/>
                        <DialogContent>
                        <Typography variant="body2" component="div" sx={{ p: 2 }}>
                            {travel.description}
                        </Typography>
                        <Grid sx={{mt: 1, mb:-1}} container direction="row" justifyContent="space-evenly">
                            <Box sx={{
                                    border: 1,
                                    borderColor: "dark-gray",
                                    borderRadius: 1,
                                    px:0.5,
                                    bgcolor: "#A8D881",
                                }}>
                                <Typography variant="body2" color="text.secondary" classname="travelType">

                                    {travel.travelType}

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

                                    {travel.distance} km

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

                                    {travel.country}

                                </Typography>
                            </Box>
                            <Box sx={{
                                border: 1,
                                borderColor: "dark-gray",
                                borderRadius: 1,
                                px:0.5,
                                bgcolor: "#dbe892",
                                }}>
                                <Typography variant="body2" color="text.secondary" classname="travelCountry">

                                    {travel.price} kr

                                </Typography>
                            </Box>
                        </Grid>
                        </DialogContent>
                    </Dialog>

                </Card>
            </div>
        </ThemeProvider>
    );
}

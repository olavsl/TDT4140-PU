import React, { useState, useEffect, forwardRef } from 'react';
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
import Slide from '@mui/material/Slide';
import CommentCard from '../components/CommentCard'
import { useAuthContext } from '../hooks/useAuthContext';
import { useTravelsContext } from '../hooks/useTravelsContext';
import { Rating } from '@mui/material';


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

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  // The parseDescription function is used to shorten the description of the travel to 120 characters.
const parseDescription = (description) => {
    if (description.length > 120) {
        return description.substring(0, 120) + "...";
    }
    return description;
}



export const TravelCard = ({ travel }) => {
    const [open, setOpen] = useState(false)
    const [commentArray, setCommentArray]= useState([travel.comments])
    const [commentInputText, setCommentInputText] = useState("")
    const [error, setError] = useState(null)
    const { user } = useAuthContext()
    const { travelDispatch } = useTravelsContext()
    const [ratingColor, setRatingColor] = useState("white");
    const [rating, setRating] = useState(travel.rating);
    const [noRating, setNoRating] = useState(false);

    const [newRating, setNewRating] = useState(0);
    const [ratingArray, setRatingArray] = useState([travel.rating]);


    // Adds the new rating to the rating array
    const newRate = () => {
        let oldArray = ratingArray
        //oldArray.push(newRating)
        setRatingArray(oldArray)
        
        console.log("newRating:")
        console.log(newRating)
        console.log("ratingArray:")
        console.log(ratingArray)

        travelRating(travel, ratingArray)

        console.log("travel.rating:")
        console.log(travel.rating)
        console.log(travel)
        
    }
    //payload for the rating
    const travelRating = async (travel, ratingArray) => {        
        const travelPayload = {
            title: travel.title,
            country: travel.country,
            startDestination: travel.startDestination,
            endDestination: travel.endDestination,
            price: travel.price,
            travelType: travel.travelType,
            description: travel.description,
            rating: ratingArray,
            comments: travel.comments
        }
        const fetchString = '/api/travels/'+travel._id
        console.log(fetchString)
        const response = await fetch(fetchString, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({travelPayload})
        }).then((res) => {
            if(res.ok) {
                console.log("OkiDoki")
            }
        })
    }


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const onSubmitCommment = async(event) => {
        event.preventDefault()
        let newComment = {author: user.username, text: commentInputText, time: Date.now()} //Gut
        let oldArray = commentArray
        oldArray.push(newComment)
        setCommentArray(oldArray)
        setCommentInputText("")
        travelComment(travel, commentArray)
    };

    const updateCommentArray = (index, newComment) => {
        const updatedArray = [...commentArray]
        updatedArray[index] = newComment
        setCommentArray(updatedArray)
    }


    const travelComment = async (travel, commentArray) => {        
        const travelPayload = {
            title: travel.title,
            country: travel.country,
            startDestination: travel.startDestination,
            endDestination: travel.endDestination,
            price: travel.price,
            travelType: travel.travelType,
            description: travel.description,
            rating: travel.rating,
            comments: commentArray
        }
        const fetchString = '/api/travels/'+travel._id
        console.log(fetchString)
        const response = await fetch(fetchString, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({travelPayload})
        }).then((res) => {
            if(res.ok) {
                console.log("its good")
            }
        })
    }

    const handelCommentInput = (e) => {
        setCommentInputText(e.target.value)
    }
    
    useEffect(() => {
        setRatingArray(travel.rating)
        setCommentArray(travel.comments)
        console.log("useEffect fired")

    }, [])
    // Sets color of rating based on the rating value.
    useEffect(() => {
        if (travel.rating >= 4) {
            setRatingColor("#b7ed66");
        } else if (travel.rating >= 3) {
            setRatingColor("#dded66");
        } else if (travel.rating >= 2) {
            setRatingColor("#edc566");
        } else if (travel.rating >= 0.01) {
            setRatingColor("#ed8a66");
        } else {
            setRatingColor("white");
            setNoRating(true)
        }
    }, [travel.rating,]);


    return (
        <ThemeProvider theme={cardTheme}>
            <div style={{margin: '0.8%'}}>
                <Card variant = "outlined" sx={{height: '22vw', width: '18.2vw', bgcolor: "#f0f4c3", border: 1, borderColor: "dark-gray"}}>
                    <CardActionArea sx={{maxHeight: '12rem'}} onClick={handleClickOpen}>
                        <CardMedia sx={{bgcolor: "#fff"}} component="img" height="140"
                            image ="https://cdn.kimkim.com/files/a/images/bef90c6256a4f93a06d90a84f8e011d8e0e1d531/big-53e242f895dd59fcf99bba0efed27b8b.jpg"
                            alt ="Picture from the trip"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="travelTitle"
                                sx={{
                                    mt: -1, 
                                    mb: -0.1, 
                                    }}>

                                {travel.title}   

                            </Typography>
                            <Grid container direction="row" justifyContent="space-between">
                                <Typography variant="body2" color="text.secondary" className="travelStartEnd">

                                    {travel.startDestination} to {travel.endDestination}

                                </Typography>
                                <Box sx={{
                                    border: 1,
                                    borderColor: "dark-gray",
                                    borderRadius: 1,
                                    px:0.5,
                                    bgcolor: ratingColor,
                                    }}>
                                <Typography variant="body2" color="black" className="rating">
                        
                                {noRating ? "No Rating" : travel.rating / 5 }
                            </Typography>
                            </Box>

                            </Grid>
                            <Divider />
                            <Typography variant="body2" color="text.secondary" className="travelShortDesc"
                                sx={{
                                    fontStyle: 'italic' 
                                    }}>

                                {parseDescription(travel.description)}

                            </Typography>
                            <Divider />
                            <Grid container direction = "row" justifyContent="flex-start"
                                sx={{
                                    mb: -0.5
                                    }}>
                                <Typography variant="body2" color="text.secondary" className="travelAuthor" >

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
                                    <Typography variant="body2" color="text.secondary" className="travelType">

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
                                    <Typography variant="body2" color="text.secondary" className="travelDistance">

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
                                    <Typography variant="body2" color="text.secondary" className="travelCountry">

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
                                    <Typography variant="body2" color="text.secondary" className="travelPrice">

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
                        color="inherit"
                        onClose={handleClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{ position: 'relative', backgroundColor: '#DFC296' }}>
                        <Toolbar>
                            <IconButton
                            edge="start"
                            color="primary"
                            onClick={handleClose}
                            aria-label="close"
                            sx = {{backgroundColor: "red"}}
                            >
                            
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
                                <Typography variant="body2" color="text.secondary" className="travelType">

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
                                <Typography variant="body2" color="text.secondary" className="travelDistance">

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
                                <Typography variant="body2" color="text.secondary" className="travelCountry">

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
                                <Typography variant="body2" color="text.secondary" className="travelPrice">

                                    {travel.price} kr

                                </Typography>
                                
                            </Box>
                            <Box sx={{
                                    border: 1,
                                    borderColor: "dark-gray",
                                    borderRadius: 1,
                                    px:0.5,
                                    bgcolor: ratingColor,
                                    }}>
                                <Typography variant="body2" color="black" className="rating"
                                sx={{ 
                                    mt:-0.5,
                                    }}>
                                {travel.rating} / 5
                            </Typography>
                            </Box>
                        </Grid>
                        <Grid sx={{mt: 3, mr: -2, mb: 2}} container direction="row" justifyContent="space-evenly">

                        Give your rating:

                        </Grid>
           
                        <Grid sx={{mt: 0, mr: -2, mb: 2}} container direction="row" justifyContent="space-evenly">
                            <Rating
                                name="simple-controlled"
                                value={newRating}
                                onChange={(event, newValue) => {
                                    setNewRating(newValue)
                                    setRatingArray(newRating)
                                    newRate()
                                    
                                    
                            }}
                            />
                        </Grid>

                              <Divider />
                        {/*Comment section under the extended travel card*/}
                        <Grid sx={{mt: 1, mb:-1}} container direction="row" justifyContent="space-evenly">
                            <Box>
                            {commentArray.map((comment, index) =>
                                <CommentCard key={index} comment={comment} onChange={(e) => updateCommentArray(index, {newComment: e.target.value} )}/>)}   
                        
                                <form onSubmit={(event) => onSubmitCommment(event)}>
                                    <label type="commmentText">Comment:</label>
                                    <input type="text" id="commentText" className="commentText" onChange={(e) => {handelCommentInput(e)}}/>
                                    <button type="publish" id="publishC omment" className="publishComment">Publish</button>
                                </form>
                            </Box>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Card>
        </div>
    </ThemeProvider>
    );
}
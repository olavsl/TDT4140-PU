import { TravelCard } from "./TravelCard"
import { useState } from "react"

import {useStore} from "../context/Store"

const Feed = () => {

    //Data is dummy data until backend is up and running.

    const [travels, setTravels] = useState([
        {
        id: 1,
        title: "New trip",
        country: "Norway",
        start: "Lindesnes",
        end: "Nordkapp",
        travelType: "Hike",
        distance: 1000,
        desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
        author: "User Userson"
        },
        {
            id: 2,
            title: "New trip",
            country: "Norway",
            start: "Lindesnes",
            end: "Nordkapp",
            travelType: "Hike",
            distance: 1000,
            desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
            author: "User Userson"
        }
    ])
    



    
    const loggedIn = useStore.getState().loggedIn
    console.log(loggedIn)


    if (loggedIn) {
        return (
            <div className="feed">
                Not logged in
                </div>
        )
    }
    return (
        
        <div className="feed">


        </div>
    )
}

export default Feed
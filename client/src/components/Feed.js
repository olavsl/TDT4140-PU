import { TravelCard } from "./TravelCard"


import {useStore} from "../context/Store"


const Feed = () => {

    //data is dummy data until backend data is up and running.

    const data = [
        {
            id: 1,
            title: "Trip",
            country: "Norway",
            start: "Lindesnes",
            end: "Nordkapp",
            travelType: "Hike",
            distance: 1000,
            desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
            author: "User Userson",
            price: 200,
        },
        {
            id: 2,
            title: "Trip2",
            country: "Norway",
            start: "Lindesnes",
            end: "Nordkapp",
            travelType: "Hike",
            distance: 1000,
            desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
            author: "User Userson",
            price: 200,
        },
        {
            id: 3,
            title: "Trip3",
            country: "Norway",
            start: "Lindesnes",
            end: "Nordkapp",
            travelType: "Hike",
            distance: 1000,
            desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
            author: "User Userson",
            price: 200,
        },
        {
            id: 4,
            title: "Trip4",
            country: "Norway",
            start: "Lindesnes",
            end: "Nordkapp",
            travelType: "Hike",
            distance: 1000,
            desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
            author: "User Userson",
            price: 200,
        },
        {
            id: 5,
            title: "Trip5",
            country: "Norway",
            start: "Lindesnes",
            end: "Nordkapp",
            travelType: "Hike",
            distance: 1000,
            desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
            author: "User Userson",
            price: 200,
        },
        {
            id: 6,
            title: "Trip6",
            country: "Norway",
            start: "Lindesnes",
            end: "Nordkapp",
            travelType: "Hike",
            distance: 1000,
            desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
            author: "User Userson",
            price: 200,
        },
        {
            id: 7,
            title: "Trip7",
            country: "Norway",
            start: "Lindesnes",
            end: "Nordkapp",
            travelType: "Hike",
            distance: 1000,
            desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
            author: "User Userson",
            price: 200,
        },
        {
            id: 8,
            title: "Trip8",
            country: "Norway",
            start: "Lindesnes",
            end: "Nordkapp",
            travelType: "Hike",
            distance: 1000,
            desc: "Palms sweaty, knees weak, arms are heavy, there's vomit on his sweater already, mom's spaghetti",
            author: "User Userson",
            price: 200,
        },
        

    ]

    const loggedIn = useStore.getState().loggedIn
    console.log(loggedIn)

    // Display cards only if logged in. Checks state of loggedIn-boolean from Zustand storage.
    if (loggedIn) {
        return (
            <div className="feed">
                Not logged in
                </div>
        )
    }

    return (
        <div className="feed">
            {/* Maps all data (currently dummy data) into TravelCard components, listing them in the feed.*/}
            {data.map( travel => (
                <TravelCard key={travel.id} travel={travel} />
            ))}
        </div>
    )
}

export default Feed
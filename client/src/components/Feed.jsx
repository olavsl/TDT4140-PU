import { useState, useEffect } from "react"
import { TravelCard } from "./TravelCard"
import AddTravelForm from "./AddTravelForm";
import { useTravelsContext } from "../hooks/useTravelsContext";

const Feed = () => {
    const { travels, dispatch } = useTravelsContext()
    const [addNewTravel, setAddNewTravel] = useState(false) 

    const fireAddNewTravel = () => {
        setAddNewTravel(current => !current)
    }

    useEffect(() => {
        const fetchTravels = async () => {
            const response = await fetch("/api/travels")
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET_TRAVELS", payload: json})
            }
        }

        fetchTravels()
    }, [dispatch])

    return (
        <div className="feed">
            {/* Maps all data (currently dummy data) into TravelCard components, listing them in the feed.*/}
            {/* {data.map( travel => (
                <TravelCard key={travel.id} travel={travel} />
            ))} */}

            {travels && travels.map((travel) => (
                <TravelCard key={travel._id} travel = {travel} /*title={travel.title} country={travel.country}
                    start={travel.startDestination} end={travel.endDestination} price={travel.price} 
                    travelType={travel.travelType}*/ />
            ))}

            <button className="add-travel-button" onClick={fireAddNewTravel}>
                <div className="add-travel-plus-sign-component" id="vertical-plus-sign-component" />
                <div className="add-travel-plus-sign-component" id="horizontal-plus-sign-component" />
            </button>

            {addNewTravel && 
                <AddTravelForm className="add-travel-form" />
            }
        </div>
    )
}

export default Feed
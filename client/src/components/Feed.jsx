import { useState, useEffect } from "react"
import { TravelCard } from "./TravelCard"
import AddTravelForm from "./AddTravelForm";
import { useTravelsContext } from "../hooks/useTravelsContext";

const Feed = () => {
    const { travels, dispatch } = useTravelsContext()
    const [addNewTravel, setAddNewTravel] = useState(false) 
    const [activeIndex, setActiveIndex] = useState(1);
    // const handleClick = (index) => setActiveIndex;
    // const checkActive = (index, className) => activeIndex === index ? className: "";

    const fireAddNewTravel = () => {
        setAddNewTravel(current => !current)
    }

    const [toggleValue, setToggleValue] = useState(true);
    const toggleRecent = () => {
        setToggleValue(true);
    }
    const toggleTopList = () => {
        setToggleValue(false);
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
    }, [])

    return (
        <div className="feed">

            <div className="feedHeader">
                <button className="tabButton" id="recentButton" onClick={toggleRecent}>Recent</button>
                <button className="tabButton" id="toplistButton" onClick={toggleTopList}>Toplist</button>
            </div>
            {toggleValue ? <div className='Tab' id='Recent'>
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
            :
            <div></div> }


                {!toggleValue ? <div className='Tab' id='Toplist'>
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
            :
            <div></div> }
            </div>
    )
}

export default Feed
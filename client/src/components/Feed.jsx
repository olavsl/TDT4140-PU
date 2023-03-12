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

    // Boolean state of toggleValue determines which tab is active. Recently added is true, Toplist is false.
    const [toggleValue, setToggleValue] = useState(true);
    const toggleRecent = () => {
        setToggleValue(true);

    }
    const toggleTopList = () => {
        setToggleValue(false);
    }

    const fetchTravels = async () => {
        const response = await fetch("/api/travels")
        const json = await response.json()
        if (response.ok) {
            // FIXME: This causes infinite rerenders.
            dispatch({type: "SET_TRAVELS", payload: json})
        }
    }

    useEffect(() => {
        fetchTravels().then((res) => {
            console.log("did mount")
        })
    }, [])

    return (
        <div className="feed">

            <div className="feedHeader">
                <button className={!toggleValue ? "tabButton" : "tabButton-Active"} id="recentButton" onClick={toggleRecent}>Recent</button>
                <button className={toggleValue ? "tabButton" : "tabButton-Active"} id="toplistButton" onClick={toggleTopList}>Top-rated</button>
            </div>
            {toggleValue ? <div className='Tab' id='Recent'>
                {travels && travels
                .slice(0)
                .reverse()
                .map((travel) => (
                    <TravelCard key={travel._id} travel = {travel} />
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
                {travels && travels
                .slice(0, 9)
                .map((travel) => (
                    <TravelCard key={travel._id} travel = {travel} />
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
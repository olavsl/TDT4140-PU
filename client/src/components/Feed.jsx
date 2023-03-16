import { useState, useEffect } from "react"
import { TravelCard } from "./TravelCard"
import AddTravelForm from "./AddTravelForm";
import { useTravelsContext } from "../hooks/useTravelsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Feed = () => {
    const { user } = useAuthContext()
    const { travels, dispatch } = useTravelsContext()
    const [addNewTravel, setAddNewTravel] = useState(false)
    const fireAddNewTravel = () => {
        setAddNewTravel(current => !current)
    }

    // Boolean state of toggleValue determines which tab is active. Recently added is true, Toplist is false.
    const [toggleValue, setToggleValue] = useState(false);
    const toggleRecent = () => {
        setToggleValue(true);
        getCountriesOfUsersRoutes()
    }
    
    const toggleTopList = () => {
        setToggleValue(false);
    }

    const getCountriesOfUsersRoutes = () => {
        var recommendationData = []
        var distinctCountries = []
        var recommendations = []
        var notRecommendations = []

        for (var i in travels) {
            if (user.myTravels.includes(travels[i]._id)) {
                for (var j in recommendationData) {
                    if (!distinctCountries.includes(recommendationData[j][0])) {
                        distinctCountries.push(recommendationData[j][0])
                    }
                }
                
                if (!distinctCountries.includes(travels[i].country)) {
                    recommendationData.push([travels[i].country, 1])
                } else {
                    for (var j in recommendationData) {
                        if (travels[i].country === recommendationData[j][0]) {
                            recommendationData[j][1]++;
                        }
                    }
                }
            }

            distinctCountries = []
        }

        recommendationData.sort((a, b) => {
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] > b[1]) ? -1 : 1;
            }
        })

        for (var j in recommendationData) {
            for (var j in travels) {
                if (recommendationData[i][0] === travels[j].country) {
                    recommendations.push(travels[j])
                } else {
                    notRecommendations.push(travels[j])
                }
            }
        }

        for (var i in recommendations) {
            notRecommendations.push(recommendations[i])
        }

        recommendations = Array.from(new Set(notRecommendations))

        dispatch({type: "SET_TRAVELS", payload: recommendations})
    }

    const likeTravel = async (e) => {
        e.preventDefault()

        const id = e.target.value

        const travel = travels[0]

        for (var i in travels) {
            if (travels[i] === id) {
                travels[i].likes++;
                const travel = travels[i]
            }
        }

        const response = await fetch("/api/travels/" + id, {
            method: "PATCH",
            body: JSON.stringify(travel),
            headers: {"Content-Type": "application/json"}
        })

        if (response.ok) {
            dispatch({type: "SET_TRAVELS", payload: travels})
            console.log(travel.likes)
        }
    }
    
    return (
        <div className="feed">

            <div className="feedHeader">
                <button className={toggleValue ? "tabButton" : "tabButton-Active"} id="toplistButton" onClick={toggleTopList}>Top-rated</button>
                <button className={!toggleValue ? "tabButton" : "tabButton-Active"} id="recentButton" onClick={toggleRecent}>Recommended</button>
            </div>
            {toggleValue ? <div className='Tab' id='Recent'>
                {travels && travels
                .slice(0)
                .reverse()
                .map((travel) => (
                    <div key={travel._id}>
                        <TravelCard travel = {travel} />
                        <button className="like-button" onClick={(e) => likeTravel(e)} value={travel._id}>Like</button>
                    </div>
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
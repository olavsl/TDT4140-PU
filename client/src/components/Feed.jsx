import { useState, useMemo } from "react"
import { TravelCard } from "./TravelCard"
import AddTravelForm from "./AddTravelForm";
import { useTravelsContext } from "../hooks/useTravelsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Feed = () => {
    const { travels, travelDispatch } = useTravelsContext()
    const { user } = useAuthContext()

    const [exitButton, setExitButton] = useState(false)
    const allTravels = useMemo (() => {return travels}, [user])
    const [addNewTravel, setAddNewTravel] = useState(false)
    const fireAddNewTravel = () => {
        setExitButton(current => !current)
        setAddNewTravel(current => !current)
    }

    // Boolean state of toggleValue determines which tab is active. Recommendations is true, Toplist is false.
    const [toggleValue, setToggleValue] = useState(0);
    const toggleTopList = () => {
        setToggleValue(1);
    }
    const toggleRecommended = () => {
        setToggleValue(0)
        getRecommendations()
    }
    const toggleLikedList = () => {
        setToggleValue(2)
        getLikedTravels()
    }

    const [numLikedTravels, setNumLikedTravels] = useState(0)
    
    const getLikedTravels = () => {
        var result = []
        var notLiked = []

        for (var i in allTravels) {
            if (user.likedTravels.includes(allTravels[i]._id)) {
                result.push(allTravels[i])
            } else {
                notLiked.push(allTravels[i])
            }
        }

        result = [...result, ...notLiked]
        setNumLikedTravels(user.likedTravels.length)

        travelDispatch( {type: "SET_TRAVELS", payload: result})
    }

    const getLikeData = () => {
        var likeData = []

        var countries = []

        for (var i in user.likedTravels) {
            for (var j in travels) {
                var travel = {}

                if (user.likedTravels[i] === travels[j]._id) {
                    travel = travels[j]
                }

                if (!countries.includes(travel.country) && travel.country != undefined) {
                    likeData.push([travel.country, 1])
                    countries.push(travel.country)
                } else {
                    for (var k in likeData) {
                        if (travel.country === likeData[k][0]) {
                            likeData[k][1]++;
                        }
                    }
                }
            }
        }

        return likeData
    }

    const getOwnTravelsData = () => {
        var ownTravelsData = []

        var countries = []

        for (var i in user.myTravels) {
            for (var j in travels) {
                var travel = {}

                if (user.myTravels[i] === travels[j]._id) {
                    travel = travels[j]
                }

                if (!countries.includes(travel.country) && travel.country != undefined) {
                    ownTravelsData.push([travel.country, 1])
                    countries.push(travel.country)
                } else {
                    for (var k in ownTravelsData) {
                        if (travel.country === ownTravelsData[k][0]) {
                            ownTravelsData[k][1]++;
                        }
                    }
                }
            }
        }

        return ownTravelsData
    }

    const getRecommendations = () => {
        const likeData = getLikeData()
        const ownTravelsData = getOwnTravelsData()

        const allData = [...likeData, ...ownTravelsData]
        var countries = []

        var recomData = []

        for (var i in allData) {
            if (!countries.includes(allData[i][0])) {
                recomData.push([allData[i][0], allData[i][1]])
                countries.push(allData[i][0])
            } else {
                for (var j in recomData) {
                    if (allData[i][0] === recomData[j][0]) {
                        recomData[j][1] += allData[i][1]
                    }
                }
            }
        }

        recomData.sort((a, b) => {
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] > b[1]) ? -1 : 1;
            }
        })

        var recommendations = []
        var notRecommendations = []

        for (var i in travels) {
            var added = false

            for (var j in recomData) {
                if (travels[i].country === recomData[j][0]) {
                    recommendations.push(travels[i])
                    added = true
                }
            }

            if (!added) {
                notRecommendations.push(travels[i])
            }
        }
        
        if (recommendations.length === 0) {
            travelDispatch({type: "SET_TRAVELS", payload: allTravels})
        } else {
            recommendations = [...recommendations, ...notRecommendations]

            travelDispatch({type: "SET_TRAVELS", payload: recommendations})
        }
    }

    return (
        <div className="feed">

            <div className="feedHeader">
                <button className={toggleValue === 1 ? "tabButton" : "tabButton-Active"} id="toplistButton" onClick={toggleTopList}>Top-rated</button>
                <button className={toggleValue === 0 ? "tabButton" : "tabButton-Active"} id="recentButton" onClick={toggleRecommended}>Recommended</button>
                <button className={toggleValue === 2 ? "tabButton" : "tabButton-Active"} id="likedButton" onClick={toggleLikedList}>Liked</button>
            </div>
            {toggleValue == 0 ? <div className='Tab' id='Recent'>
                {travels && travels
                .slice(0)
                .map((travel) => (
                    <div key={travel._id}>
                        <TravelCard travel = {travel} />
                    </div>
                ))}
                {!exitButton ?
                
                <button className="add-travel-button" onClick={fireAddNewTravel}>
                    
                    <div className="add-travel-plus-sign-component" id="vertical-plus-sign-component" />
                    <div className="add-travel-plus-sign-component" id="horizontal-plus-sign-component" />
                    
                </button>
                :
                <button className = "add-travel-button-active" onClick={fireAddNewTravel}> 

                    <div className="add-travel-plus-sign-component" id="horizontal-plus-sign-component-small" />
                </button>
            }

                {addNewTravel && 

                <AddTravelForm setExitButton={setExitButton} 
                setAddNewTravel={setAddNewTravel} 
                className="add-travel-form" />}
            </div>
            :
            <div></div> }

            {toggleValue == 1 ? <div className='Tab' id='Toplist'>
                {travels && travels
               .sort ((a, b) => {
                    return b.rating.reduce((partialSum, b) => partialSum + b, 0) / b.rating.length - a.rating.reduce((partialSum, a) => partialSum + a, 0) / a.rating.length
                })
               .slice(0, 9)
                .map((travel) => (
                    <TravelCard key={travel._id} travel = {travel} />
                ))}
                 {!exitButton ?
                    <button className="add-travel-button" onClick={fireAddNewTravel}>
                        
                        <div className="add-travel-plus-sign-component" id="vertical-plus-sign-component" />
                        <div className="add-travel-plus-sign-component" id="horizontal-plus-sign-component" />
                        
                    </button>
                    :
                    <button className = "add-travel-button-active" onClick={fireAddNewTravel}> 

                        <div className="add-travel-plus-sign-component" id="horizontal-plus-sign-component-small" />
                    </button>
                }


                {addNewTravel && 

                <AddTravelForm setExitButton={setExitButton} 
                    setAddNewTravel={setAddNewTravel} 
                    className="add-travel-form" />
                }
            </div>
            :
            <div></div> }

            {toggleValue == 2 ? <div className='Tab' id='Likedlist'>
                {travels && travels
                .sort ((a, b) => a.rating - b.rating)
                .slice(0, numLikedTravels)
                .reverse()
                .map((travel) => (
                    <TravelCard key={travel._id} travel = {travel} />
                ))}
                 {!exitButton ?
                    <button className="add-travel-button" onClick={fireAddNewTravel}>
                        
                        <div className="add-travel-plus-sign-component" id="vertical-plus-sign-component" />
                        <div className="add-travel-plus-sign-component" id="horizontal-plus-sign-component" />
                        
                    </button>
                    :
                    <button className = "add-travel-button-active" onClick={fireAddNewTravel}> 

                        <div className="add-travel-plus-sign-component" id="horizontal-plus-sign-component-small" />
                    </button>
                }


                {addNewTravel && 

                <AddTravelForm setExitButton={setExitButton} 
                    setAddNewTravel={setAddNewTravel} 
                    className="add-travel-form" />
                }
            </div>
            :
            <div></div> }

            </div>
    )
}

export default Feed

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
    const [toggleValue, setToggleValue] = useState(false);
    const toggleRecent = () => {
        setToggleValue(true);
        getRecommendations()
    }
    
    const toggleTopList = () => {
        setToggleValue(false);
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

        for (var i in recomData) {
            for (var j in travels) {
                if (recomData[i][0] === travels[j].country) {
                    recommendations.push(travels[j])
                } else {
                    notRecommendations.push(travels[j])
                }
            }
        }

        if (recommendations.length === 0) {
            travelDispatch({type: "SET_TRAVELS", payload: allTravels})
        } else {
            recommendations = Array.from(new Set([...notRecommendations, ...recommendations]))

            travelDispatch({type: "SET_TRAVELS", payload: recommendations})
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
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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


                {!toggleValue ? <div className='Tab' id='Toplist'>
                {travels && travels
               .sort ((a, b) => a.rating - b.rating)
               .slice(0, 9)
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

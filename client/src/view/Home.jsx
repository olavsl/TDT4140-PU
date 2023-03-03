import { useEffect } from "react"
import { useTravelsContext } from "../hooks/useTravelsContext"
import { useAuthContext } from "../hooks/useAuthContext"

//Components
import Header from "../components/Header"
import Filter from "../components/Filter"
import Feed from "../components/Feed"
import Ads from "../components/Ads"
import Loginform from "../components/Loginform"

const Home = () => {
    const { user } = useAuthContext()

    const { travels, dispatch } = useTravelsContext()

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
        <div className="home">
            <Loginform />
            <div className="blur-wrapper" style={ !user ? {filter: "blur(5px)", pointerEvents: "none"} : {} }>
                <Header />
                <div className="flexContent">
                    <Filter />
                    <Feed />
                    <Ads />
                </div>
            </div>
        </div>
    )
}

export default Home
import { useEffect } from "react"
import { useTravelsContext } from "../hooks/useTravelsContext"
import { useAuthContext } from "../hooks/useAuthContext"

//Components
import Header from "../components/Header"
import Filter from "../components/Filter"
import Feed from "../components/Feed"
import Ads from "../components/Ads"
import Loginform from "../components/Loginform"
import SignupForm from "../components/SignupForm"

const Home = () => {

    //TODO: toggle som bytter mellom signup og login

    return (
        <div className="home">
            <Loginform />
            <div className="blur-wrapper">
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
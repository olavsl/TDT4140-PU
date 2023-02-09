import Header from "../components/Header"
import Filter from "../components/Filter"
import Feed from "../components/Feed"
import Ads from "../components/Ads"
import {TravelCard }from "../components/TravelCard"

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Filter />
            <Feed />
            <Ads />
            <TravelCard />
        </div>
    )
}

export default Home
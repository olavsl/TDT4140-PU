import Header from "../components/Header"
import Filter from "../components/Filter"
import Feed from "../components/Feed"
import Ads from "../components/Ads"
import Loginform from "../components/Loginform"

const Home = () => {
    return (
        <div className="home">
            <Loginform />
            <Header />
            <div className="flexContent">
            <Filter />
            <Feed />
            <Ads />
            </div>
        </div>
    )
}

export default Home
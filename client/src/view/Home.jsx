import Header from "../components/Header"
import Filter from "../components/Filter"
import Feed from "../components/Feed"
import Ads from "../components/Ads"
import Loginform from "../components/Loginform"
import { useAuthContext } from "../hooks/useAuthContext"

const Home = () => {
    const { user } = useAuthContext()

    return (
        <div className="home">
            <Loginform />
            <div className="blur-wrapper" style={ !user ? {filter: "blur(5px)",} : {} }>
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
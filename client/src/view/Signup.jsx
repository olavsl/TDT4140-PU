import Header from "../components/Header"
import Filter from "../components/Filter"
import Feed from "../components/Feed"
import Ads from "../components/Ads"
import SignupForm from "../components/SignupForm"
import { useAuthContext } from "../hooks/useAuthContext"

const Signup = () => {
    const { user } = useAuthContext()

    return (
        <div className="signup">
            <SignupForm />
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

export default Signup
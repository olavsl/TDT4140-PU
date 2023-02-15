import Header from "../components/Header"
import Feed from "../components/Feed"
import Ads from "../components/Ads"

const ProfilePage = () => {
    return (
        <div className="profile">
            <Header />
            <div className="flexContent">
            <Feed />
            <Ads />
            </div>
        </div>
    )
}

export default ProfilePage
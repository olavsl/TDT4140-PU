import Header from "./Header"
import Feed from "./Feed"
import Ads from "./Ads"

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
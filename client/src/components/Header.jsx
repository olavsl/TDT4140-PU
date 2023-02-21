import logo from '../resources/logo-a.png' 
import profile from "../resources/profile.png"
import { useAuthContext } from "../hooks/useAuthContext"

const Header = () => {
    const { user } = useAuthContext()

    return (
        <div className="header">
            <div>
                <img className="logo" id="header-logo" src={logo} alt="logo" />
            </div>
            <div>
                <h1 className="heading">Peregrinate</h1>
            </div>
            <div> 
                <button className="profileButton" id="profileButton">
                    <img className="profileImg" src={profile} alt="profile"></img>
                </button>
            </div>
            <div>
                {user && (
                    <h2 className="username-display">{user.username}</h2>
                )}
            </div>
        </div>
    )
}

export default Header
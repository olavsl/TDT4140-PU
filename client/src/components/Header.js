import logo from '../resources/logo-a.png' 

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" id="header-logo" src={logo} alt="logo" />
            </div>
            <div>
                <h1 className="heading">Peregrinate</h1>
            </div>
            <div> 
                <button className="header-button" id="login-button">Log in</button>
            </div>
            <div> 
                <button className="header-button" id="signup-button">Sign up</button>
            </div>
        </div>
    )
}

export default Header
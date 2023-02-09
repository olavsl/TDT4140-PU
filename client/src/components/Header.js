const Header = () => {
    return (
        <div className="header">
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
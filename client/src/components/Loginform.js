const Loginform = () => {
return (
    <form className="logInWindow">
        <h1 className="loginHeading">Log in</h1>
        <input type="text" className="loginInput" id="usernameInput" placeholder="Username"></input>
        <input type="password" className="loginInput" id="passwordInput" placeholder="Password"></input>
        {/* <hr className="notALine"></hr> */}
        <button className="button" id="loginButton">Log in</button>
        <p className="dontHaveAnAccount">Don't have an account?</p>
        <button className="button" id="signupButton">Sign up</button>
    </form>

)
}

export default Loginform
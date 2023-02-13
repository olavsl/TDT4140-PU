const Loginform = () => {
return (
    <form className="logInWindow">
        <h1 className="loginHeading">Log in</h1>
        <input type="text" className="loginInput" id="usernameInput" placeholder="Username"></input>
        <input type="password" className="loginInput" id="passwordInput" placeholder="Password"></input>
        <hr className="notALine"></hr>
        <button className="formButton" id="loginButton" onClick="login()">Log in</button>
        <p className="dontHaveAnAccount">Don't have an account?</p>
        <button className="formButton" id="signupButton">Sign up</button>
        <script src="test.js"></script>
    </form>
    
)
}
export default Loginform
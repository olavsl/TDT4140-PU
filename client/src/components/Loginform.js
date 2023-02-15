import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Loginform = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login, error, isLoading } = useLogin()
    
    const handleLogin = async (e) => {
        // Stops the page from refreshing
        e.preventDefault()

        console.log("Username: ", username, "Password: ", password)
        await login(username, password)
    }
    
    return (
        <form className="logInWindow" onSubmit={handleLogin}>
            <h1 className="loginHeading">Log in</h1>

            <input type="text" className="loginInput" id="usernameInput" placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)} value={username} />

            <input type="password" className="loginInput" id="passwordInput" placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} value={password} />

            <hr className="notALine"></hr>

            <button className="formButton" id="loginButton" disabled={isLoading}>Log in</button>

            <p className="dontHaveAnAccount">Don't have an account?</p>

            {/* <button className="formButton" id="signupButton">Sign up</button> */}

            {error && <div className="errorResponse">{error}</div>}
        </form>
        
    )
}
export default Loginform
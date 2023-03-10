import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"

const Loginform = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { user, isLoading, dispatch } = useAuthContext()

    
    const handleLogin = async (e) => {
        // Stops the page from refreshing
        e.preventDefault()
        console.log("Username: ", username, "Password: ", password)
        dispatch({type: "LOGIN", payload: { username: username, password: password}})
    }

    //TODO knapp til signup
    
    return (
        <form className="logInWindow" onSubmit={handleLogin}>
            <h1 className="loginHeading">Log in</h1>

            <input type="text" className="loginInput" id="usernameInput" placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)} value={username} />

            <input type="password" className="loginInput" id="passwordInput" placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} value={password} />

            <hr className="notALine"></hr>

            <button className="formButton" id="loginButton" disabled={isLoading}>Log in</button>
        </form>   
    )
}
export default Loginform
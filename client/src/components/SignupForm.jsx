import { useState } from "react"
//import { useSignup } from "../hooks/useSignup"
//import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const SignupForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const { signup, isLoading, dispatch } = useAuthContext()

    //const error = new Error("Already have an account")

    const handleSignup = async (e) => {
        // Stops the page from refreshing
        e.preventDefault()

        console.log("Username: ", username, "Password: ", password, "Confirmed password: ", confirmedPassword)
        //await signup(username, password, confirmedPassword)
        
        dispatch({type: "SIGNUP", payload: { username: username, password: password, confirmedPassword: confirmedPassword}})
    }

    return (
        <form className="signupWindow" onSubmit={handleSignup} >
            <h1 className="signupHeading">Sign up</h1>

            <input type="text" className="signupInput" id="signupUsernameInput" placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)} value={username} />

            <input type="password" className="signupInput" id="signupPasswordInput" placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} value={password} />

            <input type="password" className="signupInput" id="confirmPasswordInput" placeholder="Confirm password" 
                onChange={(e) => setConfirmedPassword(e.target.value)} value={confirmedPassword} />

            <hr className="line" />

            <button className="formButton" id="signupButton" disabled={isLoading}>Sign up</button>

            <p className="alreadyHaveAnAccount">Already have an account?</p>

        </form>
    )
}

export default SignupForm
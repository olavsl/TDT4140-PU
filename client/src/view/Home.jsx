import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import Header from "../components/Header"
import Filter from "../components/Filter"
import Feed from "../components/Feed"
import Ads from "../components/Ads"

const Home = () => {
    const [toggleForms, setToggleForms] = useState(true);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const { user, isLoading, dispatch } = useAuthContext()
    
    const toggleLogin = () => {
        setToggleForms(true);
    }
    const toggleSignup = () => {
        setToggleForms(false);
    }
    
    const handleLogin = async (e) => {
        // Stops the page from refreshing
        e.preventDefault()
        dispatch({type: "LOGIN", payload: { username: username, password: password}})
    }

    const handleSignup = async (e) => {
        // Stops the page from refreshing
        e.preventDefault()
        dispatch({type: "SIGNUP", payload: { username: username, password: password, confirmedPassword: confirmedPassword}})
    }

    return (
        <div className="home">            
        <div className="FormSwitch">
            <button className={!toggleForms ? "tabButton" : "tabButton-Active"} id="recentButton" onClick={toggleLogin}>Log in</button>
            <button className={toggleForms ? "tabButton" : "tabButton-Active"} id="toplistButton" onClick={toggleSignup}>Sign up</button>
        </div>    
            { toggleForms ? <div> {
                user === null && 
                <form className="logInWindow" onSubmit={handleLogin}>
                    <div className="FormSwitch">
                        <button className={!toggleForms ? "tabButton" : "tabButton-Active"} id="recentButton" onClick={toggleLogin}>Log in</button>
                        <button className={toggleForms ? "tabButton" : "tabButton-Active"} id="toplistButton" onClick={toggleSignup}>Sign up</button>
                    </div>    
                    <input type="text" className="loginInput" id="usernameInput" placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)} value={username} />

                    <input type="password" className="loginInput" id="passwordInput" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button className="formButton" id="loginButton" disabled={isLoading}>Log in</button>
                </form>                
                }
            </div>
            :
            <div></div> }
            { !toggleForms ? <div> {
                user === null && 
                <form className="signupWindow" onSubmit={handleSignup} >
                    <div className="FormSwitch">
                        <button className={!toggleForms ? "tabButton" : "tabButton-Active"} id="loginButton" onClick={toggleLogin}>Log in</button>
                        <button className={toggleForms ? "tabButton" : "tabButton-Active"} id="signupButton" onClick={toggleSignup}>Sign up</button>
                    </div>    
                    <input type="text" className="signupInput" id="signupUsernameInput" placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)} value={username} />
        
                    <input type="password" className="signupInput" id="signupPasswordInput" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} value={password} />
        
                    <input type="password" className="signupInput" id="confirmPasswordInput" placeholder="Confirm password" 
                        onChange={(e) => setConfirmedPassword(e.target.value)} value={confirmedPassword} />
                
                    <button className="formButton" id="signupButton" disabled={isLoading}>Sign up</button>        
                </form>    
                }
            </div>
            :
            <div></div> }
            
            <div className="blur-wrapper">
                <Header />
                <div className="flexContent">
                    <Filter />
                    <Feed />
                    <Ads />
                </div>
            </div>
        </div>
    )
}

export default Home
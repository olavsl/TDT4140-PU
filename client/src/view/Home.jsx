import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import Header from "../components/Header"
import Filter from "../components/Filter"
import Feed from "../components/Feed"
import Ads from "../components/Ads"
import { useTravelsContext } from "../hooks/useTravelsContext"
import { useLogin } from "../hooks/useLogin"
import { useSignup } from "../hooks/useSignup"

const Home = () => {
    const { travels, travelDispatch } = useTravelsContext()
    const [ travelList, setTravelList ] = useState(travels)
    const [toggleForms, setToggleForms] = useState(true);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const { user, isLoading, userDispatch } = useAuthContext()
    const { login, loginError } = useLogin()
    const { signup, signupError } = useSignup()
    
    const toggleLogin = () => {
        setToggleForms(true);
    }
    const toggleSignup = () => {
        setToggleForms(false);
    }
    
    const handleLogin = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        await signup(username, password, confirmedPassword)
    }

    // Fetch travels
    const fetchTravels = async () => {
        const response = await fetch("/api/travels")
        const json = await response.json()
        if (response.ok) {
            travelDispatch({type: "SET_TRAVELS", payload: json})
        }
    }

    useEffect(() => {
        fetchTravels().then((res) => {
            console.log("did mount")
        })
    }, [])

    return (
        <div className="home">            
        <div className="FormSwitch">
            <button className={toggleForms ? "tabButton" : "tabButton-Active"} id="loginButton" onClick={toggleLogin}>Log in</button>
            <button className={!toggleForms ? "tabButton" : "tabButton-Active"} id="signupButton" onClick={toggleSignup}>Sign up</button>
        </div>    
            { toggleForms ? <div> {
                user === null && 
                <form className="logInWindow" onSubmit={handleLogin}>
                    <div className="FormSwitch">
                        <button className={toggleForms ? "tabButton" : "tabButton-Active"} id="loginButton" onClick={toggleLogin}>Log in</button>
                        <button className={!toggleForms ? "tabButton" : "tabButton-Active"} id="signupButton" onClick={toggleSignup}>Sign up</button>
                    </div>    
                    <input type="text" className="loginInput" id="usernameInput" placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)} value={username} />

                    <input type="password" className="loginInput" id="passwordInput" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button className="formButton" id="loginButton" disabled={isLoading}>Log in</button>

                    {loginError && <div className="errorResponse">{loginError}</div>}
                </form>                
                }
            </div>
            :
            <div></div> }
            { !toggleForms ? <div> {
                user === null && 
                <form className="signupWindow" onSubmit={handleSignup} >
                    <div className="FormSwitch">
                        <button className={toggleForms ? "tabButton" : "tabButton-Active"} id="loginButton" onClick={toggleLogin}>Log in</button>
                        <button className={!toggleForms ? "tabButton" : "tabButton-Active"} id="signupButton" onClick={toggleSignup}>Sign up</button>
                    </div>    
                    <input type="text" className="signupInput" id="signupUsernameInput" placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)} value={username} />
        
                    <input type="password" className="signupInput" id="signupPasswordInput" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} value={password} />
        
                    <input type="password" className="signupInput" id="confirmPasswordInput" placeholder="Confirm password" 
                        onChange={(e) => setConfirmedPassword(e.target.value)} value={confirmedPassword} />
                
                    <button className="formButton" id="signupButton" disabled={isLoading}>Sign up</button> 

                    {signupError && <div className="errorResponse">{signupError}</div>}
                </form>    
                }
            </div>
            :
            <div></div> }
            
            <div className="blur-wrapper" style={ !user ? {filter: "blur(5px)", pointerEvents: "none"} : {} }>
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
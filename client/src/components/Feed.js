import { TravelCard } from "./TravelCard"
import { useState } from "react"
import {useStore} from "./Store"

const Feed = () => {
    const [user, setUser] = useState(null)
    const loggedIn = useStore.getState().loggedIn
    console.log(loggedIn)
    if (!loggedIn) {
        return (
            <div className="feed">
                Not logged in
                </div>
        )
    }
    return (
        
        <div className="feed">
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
        </div>
    )
}

export default Feed
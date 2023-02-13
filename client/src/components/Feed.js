import { TravelCard } from "./TravelCard";
import Store from '../context/Store.js';

const Feed = () => {

    const loggedIn = Store((state) => state.loggedIn)

    console.log(loggedIn)
    
    if (!loggedIn) {
        return <div className="feed"> </div>
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
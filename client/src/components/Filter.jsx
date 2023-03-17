import { useTravelsContext } from "../hooks/useTravelsContext";
import { useAuthContext } from "../hooks/useAuthContext"
import { useMemo } from "react";

/* function search_travel() {
    // try {
        let input = document.getElementById('searchBar').value
        input = input.toLowerCase();
        // let x = document.getElementsByClassName('travels');
        let result = (travel => (travel.title = input) || (travel.country = input) || (travel.startDestination = input) || (travel.endDestination = input) || (travel.price = input) || (travel.description = input) || (travel.travelType = input)); 
        console.log(result)
        return result;
    // } catch (TypeError) {
    // }    
    
} */

const Filter = () => {
    const { travels, dispatch } = useTravelsContext()
    const { user } = useAuthContext()

    const allTravels = useMemo(() => {return travels}, [user])

    const handleSearch = async e => {
        if (e.keyCode === 13) {
            const search = e.target.value.toLowerCase()
            if (search === "") {
                await fetchTravels()
            }
            else {
                await fetchTravels()
                const filteredTravels = allTravels.filter(travel => travel.title.toLowerCase().includes(search) || travel.country.toLowerCase().includes(search)) 
                dispatch({ type: 'SET_TRAVELS', payload: filteredTravels })
        }  
        }
    }

    const fetchTravels = async () => {
        const response = await fetch("/api/travels")
        const json = await response.json()
        if (response.ok) {
            dispatch({type: "SET_TRAVELS", payload: json})
        }
    };

    return (
        <div className="filter">
            <div>
                <input className="searchBar" onKeyDown={handleSearch} placeholder='Search on travels or contries' />
            </div>
        </div>
    )
}

export default Filter
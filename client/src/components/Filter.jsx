import { useTravelsContext } from "../hooks/useTravelsContext";


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

    const handleSearch = e => {
        const search = e.target.value.toLowerCase()
        console.log(travels)
        if (search === "") {
            fetchTravels()
        }
        else {
            const filteredTravels = travels.filter(travel => travel.title.toLowerCase().includes(search.toLowerCase())) 
            // for (travel in hsJson) {
            //     if (travel in filteredTravels) {
            //         filteredTravels += travel
            //     }
            // }
            //&& travels.filter(travel => travel.country.toLowerCase().includes(search.toLowerCase())) && travels.filter(travel => travel.startDestination.toLowerCase().includes(search.toLowerCase())) && travels.filter(travel => travel.endDestination.toLowerCase().includes(search.toLowerCase())) && travels.filter(travel => travel.description.toLowerCase().includes(search.toLowerCase())) && travels.filter(travel => travel.travelType.toLowerCase().includes(search.toLowerCase()))
            dispatch({ type: 'SET_TRAVELS', payload: filteredTravels })
        }
    }

    const fetchTravels = async () => {
        const response = await fetch("/api/travels")
        const json = await response.json()
        if (response.ok) {
            dispatch({type: "SET_TRAVELS", payload: json})
        }
    }

    return (
        <div className="filter">
            <div>
                <input className="searchBar" onChange={handleSearch} placeholder='Search travels' />
            </div>
        </div>
    )
}

export default Filter
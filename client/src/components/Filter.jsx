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

    const handleSearch = (e) => {
        const search = e.target.value
        const filteredTravels = travels.filter(travel => travel.title.toLowerCase().includes(search.toLowerCase() || travel.country.toLowerCase().includes(search.toLowerCase()) || travel.startDestination.toLowerCase().includes(search.toLowerCase()) || travel.endDestination.toLowerCase().includes(search.toLowerCase()) || travel.price.toLowerCase().includes(search.toLowerCase()) || travel.description.toLowerCase().includes(search.toLowerCase()) || travel.travelType.toLowerCase().includes(search.toLowerCase())))
        dispatch({ type: 'SET_TRAVELS', payload: filteredTravels })
    }


    return (
        <div className="filter">
            <div>
                <input className="searchBar" onKeyUp={handleSearch} placeholder='Search travels' />
            </div>
        </div>
    )
}

export default Filter
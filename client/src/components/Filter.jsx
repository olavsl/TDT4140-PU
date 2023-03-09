import { useTravelsContext } from "../hooks/useTravelsContext";


function search_travel() {
    // try {
        let input = document.getElementById('searchBar').value
        input = input.toLowerCase();
        // let x = document.getElementsByClassName('travels');
        let result = (travel => (travel.title = input) || (travel.country = input) || (travel.startDestination = input) || (travel.endDestination = input) || (travel.price = input) || (travel.description = input) || (travel.travelType = input)); 
        console.log(result)
        return result;
    // } catch (TypeError) {
    // }    
    
}

const Filter = () => {
    const { travels, dispatch } = useTravelsContext()
    return (
        <div className="filter">
            <div>
                <input className="searchBar" onKeyUp={search_travel()} name="search" value="notNull" type="text" placeholder='Search travels' />
            </div>
        </div>
    )
}

export default Filter
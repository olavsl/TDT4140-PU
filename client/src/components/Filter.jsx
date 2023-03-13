import { useState, useMemo } from "react"
import { useTravelsContext } from "../hooks/useTravelsContext";

const Filter = () => {
    const { travels, dispatch } = useTravelsContext()
    const [showCountries, setShowCountries] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    const [distinctCountries, setDistinctCountries] = useState([])
    const allTravels = useMemo(() => {return travels}, [showCountries])
    var filteredTravels = [];
    var checkedCountries = [];

    // Push json travels to JS array
    const resetFilteredTravels = () => {
        filteredTravels = []
        
        for (var i in allTravels) {
            filteredTravels.push(allTravels[i])
        }
    }

    // Filter functions
    const filterTravelsByCountry = () => {
        filteredTravels = []
        for (var i = 0; i < allTravels.length; i++) {
            if (checkedCountries.includes(allTravels[i].country)) {
                filteredTravels.push(allTravels[i])
            }
        }

        if (checkedCountries.length === 0) {
            resetFilteredTravels()
        }
    }

    // Get distinct countries of travels on the page
    const getDistinctCountries = () => {
        const countries = []
        travels && travels.map((travel) => {
            if (!countries.includes(travel.country)) {
                countries.push(travel.country)
            }
        })
        countries.sort()

        return countries
    }

    // Show different options for filtering
    const fireShowCountries = (e) => {
        e.preventDefault()
        setDistinctCountries(getDistinctCountries())
        setShowCountries(current => !current)

        if (showCountries) {
            dispatch({type: "SET_TRAVELS", payload: allTravels})
        }
    }

    const fireShowPrice = (e) => {
        e.preventDefault()
        setShowPrice(current => !current)
    }

    // Get checked countries
    const getCheckedCountries = () => {
        checkedCountries = []
        
        var countryInputFilters = document.getElementsByClassName("filter-country-checkbox")
        for (var i = 0; i < countryInputFilters.length; i++) {
            if (countryInputFilters[i].checked) {
                checkedCountries.push(countryInputFilters[i].value)
            }
        }
    }

    const filterTravels = (e) => {
        getCheckedCountries()
        filterTravelsByCountry()

        dispatch({type: "SET_TRAVELS", payload: filteredTravels})
    }

    return (
        <div className="filter">
            <h2 className="filter-heading">Filter</h2>
            <hr className="filter-heading-line" />
            <form className="filter-form">
                <div className="filter-form-section">
                    <button className="filter-form-section-heading" onClick={fireShowCountries}>Countries</button>
                    {showCountries && distinctCountries && distinctCountries.map((country) => (
                        <div className="filter-form-subsection" key={country}>
                            <input className="filter-country-checkbox" type="checkbox" name={country} value={country} onClick={(e) => filterTravels(e)} />
                            <label htmlFor={country}>{country}</label>
                        </div>
                    ))}
                </div>
                <div className="filter-form-section">
                    <button className="filter-form-section-heading" onClick={fireShowPrice}>Price</button>
                    {showPrice &&
                        <div className="filter-form-subsection">
                            <div className="filter-form-subsection">
                                <label htmlFor="minPrice">Min</label>
                                <input className="filter-price-input" name="minPrice" type="number"></input>
                            </div>
                            <div className="filter-form-subsection">
                                <label htmlFor="maxPrice">Max</label>
                                <input className="filter-price-input" name="maxPrice" type="number"></input>
                            </div>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Filter
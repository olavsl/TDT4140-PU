import { useState, useEffect } from "react"
import { useTravelsContext } from "../hooks/useTravelsContext"

const Filter = () => {
    const { travels, travelDispatch } = useTravelsContext()
    const [showCountries, setShowCountries] = useState(false)
    const [showPrice, setShowPrice] = useState(false)
    var distinctCountries = []

    useEffect(() => {
        setDistinctCountries()
    })

    const setDistinctCountries = () => {
        const countryList = []
        
        for (var i in travels) {
            countryList.push(travels[i].country)
        }

        return distinctCountries = new Set(countryList)
    }

    const filterTravels = (e) => {
        return travels.filter(() => {
            return 
        })
    }

    // Show different options for filtering
    const fireShowCountries = (e) => {
        e.preventDefault()
        setShowCountries(current => !current)
        console.log(distinctCountries)
        // if (showCountries) {
        //     dispatch({type: "SET_TRAVELS", payload: allTravels})
        // }
    }

    const fireShowPrice = (e) => {
        // e.preventDefault()
        // setShowPrice(current => !current)
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
import { useState, useEffect, useMemo } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useTravelsContext } from "../hooks/useTravelsContext"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Filter = () => {
    const { user } = useAuthContext()
    const { travels, travelDispatch } = useTravelsContext()
    const [showCountries, setShowCountries] = useState(false)
    const [showPrice, setShowPrice] = useState(false)

    const allTravels = useMemo (() => {return travels}, [user])

    const distinctCountries = useMemo(() => {
        const countryList = []
        
        for (var i in allTravels) {
            countryList.push(allTravels[i].country)
        }

        return Array.from(new Set(countryList))
    }, [user])

    var countries = []
    const getCountries = () => {
        const inputs = document.getElementsByClassName("filter-country-checkbox")

        var result = []

        for (var i in inputs) {
            if (inputs[i].checked) {
                result.push(inputs[i].value)
            }
        }

        if (result.length === 0) {
            result = distinctCountries
        }
        
        return result
    }

    const [priceRange, setPriceRange] = useState([0, 200000])

    const filterTravels = (e) => {
        countries = getCountries()
        
        const filteredTravels = allTravels.filter((travel) => {
            return countries.includes(travel.country) && travel.price > priceRange[0] && travel.price < priceRange[1]
        })

        travelDispatch({type: "SET_TRAVELS", payload: filteredTravels})
    }

    // Show different options for filtering
    const fireShowCountries = (e) => {
        e.preventDefault()
        setShowCountries(current => !current)
    }

    const fireShowPrice = (e) => {
        e.preventDefault()
        setShowPrice(current => !current)
    }

    const handleChange = (e, newValue) => {
        setPriceRange(newValue)
        filterTravels(e)
    };

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
                            <Box sx={{ width: 100 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={priceRange}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={200000}
                                step={1000}
                            />
                            </Box>
                            <p>Min: {priceRange[0]} Max: {priceRange[1]}</p>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}


export default Filter
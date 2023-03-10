import { useState } from "react"
import { useTravelsContext } from "../hooks/useTravelsContext"

const AddTravelForm = () => {
    const { dispatch } = useTravelsContext()

    const [title, setTitle] = useState("")
    const [country, setCountry] = useState("")
    const [startDestination, setStartDestination] = useState("")
    const [endDestination, setEndDestination] = useState("")
    const [price, setPrice] = useState("")
    const [travelType, setTravelType] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(null)

    const [style, setStyle] = useState("add-travel-form-show")
    
    const handleAddTravel = async (e) => {
        e.preventDefault()

        const travel = {title, country, startDestination, endDestination, price, travelType, description}

        const response = await fetch("/api/travels", {
            method: "POST",
            body: JSON.stringify(travel),
            headers: {"Content-Type": "application/json"}
        })

        const json = await response.json()

        if (!response) {
            setError(json.error)
        }

        if (response.ok) {
            setError(null)
            setTitle("")
            setCountry("")
            setStartDestination("")
            setEndDestination("")
            setPrice("")
            setTravelType("")
            setDescription("")
            
            dispatch({type: "CREATE_TRAVEL", payload: json})

            setStyle("add-travel-form-hide")
        }

        console.log(title, country, startDestination, endDestination, price, travelType, description)
    }
    
    return (
        <form className={style} onSubmit={handleAddTravel} >
            <h1 className="add-travel-heading">Add new travel</h1>

            <input className="add-travel-input" type="text" placeholder="Title"
                onChange={(e) => setTitle(e.target.value)} value={title} />

            <input className="add-travel-input" type="text" placeholder="Country"
                onChange={(e) => setCountry(e.target.value)} value={country} />

            <input className="add-travel-input" type="text" placeholder="startDestination"
                onChange={(e) => setStartDestination(e.target.value)} value={startDestination} />

            <input className="add-travel-input" type="text" placeholder="endDestination"
                onChange={(e) => setEndDestination(e.target.value)} value={endDestination} />

            <input className="add-travel-input" type="number" placeholder="Price"
                onChange={(e) => setPrice(e.target.value)} value={price} />

            <input className="add-travel-input" type="text" placeholder="travelType"
                onChange={(e) => setTravelType(e.target.value)} value={travelType} />

            <input className="add-travel-input" type="text" placeholder="description"
                onChange={(e) => setDescription(e.target.value)} value={description} />

            <button className="formButton" id="add-travel-button" onClick={handleAddTravel}>Publish</button>
        </form>
    )
}

export default AddTravelForm
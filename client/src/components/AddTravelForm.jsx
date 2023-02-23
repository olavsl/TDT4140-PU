import { useState } from "react"
import { useAddTravel } from "../hooks/useAddTravel"
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
    const { addTravel, error, isLoading } = useAddTravel()
    
    const handleAddTravel = async (e) => {
        e.preventDefault()

        console.log(title, country, startDestination, endDestination, price, travelType, description)
        
        await addTravel(title, country, startDestination, endDestination, price, travelType, description)
    }
    
    return (
        <form className="add-travel-form" onSubmit={handleAddTravel} >
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

            <button class="formButton" id="add-travel-button" onClick={handleAddTravel}>Publish</button>
        </form>
    )
}

export default AddTravelForm
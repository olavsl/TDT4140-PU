import { useState } from "react"

export const useAddTravel = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const addTravel = async (title, country, startDestination, endDestination, price, travelType, description) => {
        setError(null)
        setIsLoading(null)

        const response = await fetch("/api/travels/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, country, startDestination, endDestination, price, travelType, description})
        })

        const json = await response.json()

        if (!response) {
            setError(json.error)
            setIsLoading(false)
        }

        if (response.ok) {
            setIsLoading(false)
        }
    }
    
    return { addTravel, isLoading, error }
}
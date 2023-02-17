import { useState } from "react"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (username, password, confirmedPassword) => {
        setError(null)
        setIsLoading(null)
    
        const response = await fetch("/api/users/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password, confirmedPassword})
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
        }

        if (response.ok) {
            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}
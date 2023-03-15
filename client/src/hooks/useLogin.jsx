import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (username, password) => {
        setError(null)
        setIsLoading(null)
    
        const response = await fetch("/api/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
        }

        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json))

            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}

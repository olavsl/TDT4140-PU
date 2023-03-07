import { useState } from "react"

export const useAddComment = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const addComment = async (commentID, author, travelID, text, time) => {
        setError(null)
        setIsLoading(null)
    
        const response = await fetch("/api/comment/createComment", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({commentID, author, travelID, text, time})
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

    return { addComment, isLoading, error }
}
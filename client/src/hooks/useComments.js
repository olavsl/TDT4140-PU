import { useState } from "react"
import { useCommentContext } from "./useCommentContext"

export const useComment = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { comments, dispatch } = useCommentContext()

    const comment = async () => {
        setError(null)
        setIsLoading(null)
    
        const response = await fetch("/api/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({})
        })

        const json = await response.json()

        if (!response.ok) {
            throw new error("Can not get Comment (UseComments)")
        }

        if (response.ok) {
            //localStorage.setItem("user", JSON.stringify(json))

            dispatch({type: "GET_COMMENTS", payload: json})

            setIsLoading(false)
        }
    }

    return { comment, isLoading, error }
}
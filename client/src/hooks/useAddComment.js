import { useState } from "react"
import { useCommentContext } from "./useCommentContext"

export const useAddComment = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { comments, dispatch } = useCommentContext()
    const [commentID, setCommentID] = useState("")
    const [author, setAuthor] = useState("")
    const [travelID, setTravelID] = useState("")
    const [text, setText] = useState("")
    const [time, setTime] = useState("")


    const addComment = async (commentID, author, travelID, text, time) => {
        setError(null)
        setIsLoading(null)

        const comment = {commentID, author, travelID, text, time}
    
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
            setCommentID("")
            setAuthor("")
            setTravelID("")
            setText("")
            setTime("")
            dispatch({type: "CREATE_COMMENT", payload: json})
        }
        return comment
    }


    return { addComment, isLoading, error }
}
import { useState } from "react"

export const useComment = () => {
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

    const fetchComment = async (commentID, author, travelID, text, time) => {
        setError(null)
        setIsLoading(null)
    
        const response = await fetch("/api/comment/getComment", {
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

    const fetchComments = async (commentID, author, travelID, text, time) => {
        setError(null)
        setIsLoading(null)
    
        const response = await fetch("/api/comment/getComments", {
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


    const editComment = async (commentID, author, travelID, text, time) => {
        setError(null)
        setIsLoading(null)
    
        const response = await fetch("/api/comment/updateComment", {
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

    const deleteComment = async (commentID, author, travelID, text, time) => {
        setError(null)
        setIsLoading(null)
    
        const response = await fetch("/api/comment/deleteComment", {
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



    return { addComment, fetchComment, fetchComments, editComment, deleteComment, isLoading, error }
}
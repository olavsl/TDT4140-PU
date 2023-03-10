import { createContext, useReducer, useMemo } from "react"

export const CommentContext = createContext()

export const commentReducer = (state, action) => {
    switch (action.type) {
        case "GET_COMMENTS":{
            return { comment: action.payload }}
        case "CREATE_COMMENT":
            return [...state, {
                author: action.author,
                text: action.text,
                time: action.time
            }]
        /*case "UPDATE_COMMENT": 
            return comments.map((t) => {
                if (t.author === action.comment.author && t.travelID === action.comment.travelID) {
                  return action.comment
                } else {
                  return t
                }
            });
        case "DELETE_COMMENT":
            return comments.filter((t) => t.id !== action.id);*/
        default: 
            throw Error ("Uknown action:"+ action.type)
    } 
}

export const CommentContextSupplier = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, {
        comment: null
    })

    const valueComCon = useMemo(() => ({...state, dispatch}), [state])

    return (
        <CommentContext.Provider value={valueComCon}>
            { children }
        </CommentContext.Provider>
    )
}

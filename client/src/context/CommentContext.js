import { createContext, useReducer, useMemo } from "react"

export const CommentContext = createContext()

export const commentReducer = (state, action) => {
    switch (action.type) {
        case "GET_COMMENTS":{
            return {
                comment: action.payload
            }}
        case "CREATE_COMMENT":
            return {
                comment: [...state.comment, action.payload]}
        default: 
            throw Error ("Uknown action:"+ action.type)
    } 
}

export const CommentContextSupplier = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, {
        comment: null
    })

    const valueComCon = useMemo(() => ({...state, dispatch}), [state, dispatch])

    return (
        <CommentContext.Provider value={valueComCon}>
            { children }
        </CommentContext.Provider>
    )
}

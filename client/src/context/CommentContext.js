import { createContext, useReducer, useMemo } from "react"

export const CommentContext = createContext()

export const commentReducer = (state, action) => {
    switch (action.type) {
        case "SET_COMMENT":
            return {
                comments: action.payload
            }
        case "CREATE_COMMENT":
            return {
                cpmments: [action.payload, ...state.travels]
            }
        default: 
            return state
    } 
}

export const CommentContextSupplier = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, {
        travels: null
    })

    const valueComCon = useMemo(() => ({...state, dispatch}), [state])

    return (
        <CommentContext.Provider value={valueComCon}>
            { children }
        </CommentContext.Provider>
    )
}
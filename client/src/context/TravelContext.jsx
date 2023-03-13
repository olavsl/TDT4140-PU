import { createContext, useReducer, useMemo } from "react"

export const TravelsContext = createContext()

export const travelsReducer = (state, action) => {
    switch (action.type) {
        case "SET_TRAVELS":   
            return {
                travels: action.payload
            }
        case "CREATE_TRAVEL":
            return {
                travels: [...state.travels, action.payload]
            }
        /*case "UPDATE_COMMENTS":
            return {
                travels: [...state.travels.comments, action.payload.comments ]
            }*/
        default: 
            return state
    } 
}

export const TravelsContextSupplier = ({ children }) => {
    const [state, dispatch] = useReducer(travelsReducer, {
        travels: null
    })
    
    const valueTravCon = useMemo(() => ({...state, dispatch}), [state])
    
    return (
        <TravelsContext.Provider value={valueTravCon}>
            { children }
        </TravelsContext.Provider>
    )
}
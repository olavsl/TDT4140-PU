import { createContext, useReducer } from "react"

export const TravelsContext = createContext()

export const travelsReducer = (state, action) => {
    switch (action.type) {
        case "SET_TRAVELS":
            return {
                travels: action.payload
            }
        case "CREATE_TRAVEL":
            return {
                travels: [action.payload, ...state.travels]
            }
        default: 
            return state
    } 
}

export const TravelsContextSupplier = ({ children }) => {
    const [state, dispatch] = useReducer(travelsReducer, {
        travels: null
    })

    return (
        <TravelsContext.Provider value={{...state, dispatch}}>
            { children }
        </TravelsContext.Provider>
    )
}
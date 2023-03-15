import { createContext, useMemo, useReducer } from "react"

export const AuthContext = createContext() 

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {user: action.payload}
        case "SIGNUP": 
            return {user: action.payload}
        case "LOGOUT":
            return {user: null}
        default:
            return state
    }
}

export const AuthContextSupplier = ({children}) => {
    const [state, userDispatch] = useReducer(authReducer, {
        user: null
    })

    const stateValue = useMemo(() => ({...state, userDispatch}),[state])

    console.log("AuthContext state: ", state)

    return (
        <AuthContext.Provider value={stateValue}>
            {children}
        </AuthContext.Provider>
    )
}
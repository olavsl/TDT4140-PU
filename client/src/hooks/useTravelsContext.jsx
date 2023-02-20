import { TravelsContext } from "../context/TravelContext";
import { useContext } from "react";

export const useTravelsContext = () => {
    const context = useContext(TravelsContext)

    if (!context) {
        throw Error("useTravelsContext can only be used within a TravelContextSupplier")
    }
    
    return context
}
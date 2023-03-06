import { CommentContext } from "../context/CommentContext";
import { useContext } from "react";

export const useCommentContext = () => {
    const context = useContext(CommentContext)

    if (!context) {
        throw Error("useCommentContext can only be used within a CommentContextSupplier")
    }
    
    return context
}
import React from 'react';
import Card from '@mui/material/Card';
//import { useAuthContext } from '../hooks/useAuthContext';

const CommentCard = ({ comment }) => {
    //const { user } = useAuthContext();

    /*const onClickDelete = () => {
        if (user.username === comment.author) {
            //TODO: deleteComment
                //fjern fra travel.comment lista 
        }
        if (user.username === admin.name) {
            //fjern fra travel.comment lista
        }*
        else {
            throw new Error("Can not delete other peoples comments")
        }
    }*/

    return (
        <Card className="CommentCard">
        <div id="CommentCard">
            <div id="top">
            <h4 className="author">
                {comment.author}
            </h4>
            </div>
            <div className="commentText">
                <p id="text">{comment.text}</p>
            </div>
            <div>
                <div>{comment.time}</div>
            </div>
        </div>
        </Card>
    );
};


//<button onClick={() => onClickDelete()}>delete</button>
                
export default CommentCard;

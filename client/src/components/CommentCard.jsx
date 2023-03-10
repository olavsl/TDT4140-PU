import React from 'react';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import { useAuthContext } from '../hooks/useAuthContext';

const CommentCard = ({ comment }) => {
    const { user } = useAuthContext();

    const onClickDelete = () => {
        if (user.username === comment.author) {
            //TODO: deleteComment
                //fjern fra travel.comment lista 
        }
        /*if (user.username === admin.name) {
            //fjern fra travel.comment lista
        }*/
        else {
            throw new Error("Can not delete other peoples comments")
        }
    }

    return (
        <Card className="CommentCard" ClassName="commentID">
        <div id="defaultView">
            <div id="top">
            <h4 ClassName="author">
                {comment.author}
            </h4>
            </div>
            <div ClassName="commentText">
                <p id="text">{comment.text}</p>
            </div>
            <div>
                <Fab title='delete' className='icons' id="iconDelete" size="medium" color="primary" onClick={() => onClickDelete()}>
                </Fab>
                
                <div>{comment.time}</div>
            </div>
        </div>
        </Card>
    );
};

export default CommentCard;

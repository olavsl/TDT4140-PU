import React from 'react';
import Card from '@mui/material/Card';
import { Comment } from '../classes/Comment';
import Fab from '@mui/material/Fab';
import { User } from '../classes/User';
import { current } from '@reduxjs/toolkit';

const CommentCard = ({ Comment }) => {
    let name = User.name();

    const onClickEdit = () => {
        if (name === Comment.author) {
            Comment.updateComment()
        }
        else {
            throw new Error("Can not change other peoples comments")
        }
    }
    
    const onClickDelete = () => {
        if (name === Comment.author) {
            Comment.deleteComment()
        }
        /*if (name === admin.name) {
            Comment.deleteComment()
        }*/
        else {
            throw new Error("Can not delete other peoples comments")
        }
    }

    return (
        <Card className="CommentCard" ClassName="commentID">
            {Comment.ID.toString()}
        <div id="defaultView">
            <div id="top">
            <h4 ClassName="author">
                {Comment.author}
            </h4>
            </div>
            <div ClassName="commentText">
                <p id="text">{Comment.text}</p>
            </div>
            <div>
            {/*Fiks onClick */}
                <Fab title='edit' className='icons' id="iconEdit" size="medium" color="primary" onClick={() => onClickEdit()}>
                </Fab>
            {/*Fiks onClick */}
                <Fab title='delete' className='icons' id="iconDelete" size="medium" color="primary" onClick={() => onClickDelete()}>
                </Fab>
                
                <time datetime={current.datetime}></time>
            </div>
        </div>
        </Card>
    );
};

export default CommentCard;

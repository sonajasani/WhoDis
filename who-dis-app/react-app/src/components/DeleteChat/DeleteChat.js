import './deletechat.css'
import { useState } from "react"
import { deleteMessage } from "../../store/channel_messages";
import { useDispatch } from "react-redux";


const DeleteChat = ({messageId, toggleDelete}) => {

    const dispatch = useDispatch();
    const submitDelete = (e) => {
        e.preventDefault();
        
        dispatch(deleteMessage(messageId))
        toggleDelete(false);
    }
    
    return (
        <div className='delete-chat-container'>
            <form className='delete-chat-form' onSubmit={submitDelete}>
                <p id='delete-msg-title'>Are you sure you want to delete this message?</p>
                <button id='delete-msg-btn' type="submit">Delete Chat</button>
            </form>
        </div>
    )
}

export default DeleteChat
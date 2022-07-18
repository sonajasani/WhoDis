import './chatfield.css';
import {io} from 'socket.io-client'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createChannelMessage, deleteMessage } from '../../store/channel_messages';
import {useParams} from 'react-router-dom'


let socket;

const ChatField = ({channelId}) => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const user = useSelector((state) => state.session.user);
    // useEffect(() => {

    //     socket = io();

    //     socket.on("chat", (chat) => {

    //         const content = chat.msg
    //         const payload = {
    //             content
    //         }
    //         dispatch(createChannelMessage(channelId, payload))
    //     })
        
    //     return (() => {
    //         socket.disconnect();
    //     })
    // }, [dispatch, channelId])

    // const deleteMessage = async(e, msg) => {
    //     e.preventDefault();
    //     const payload = {
    //         msg
    //     }

    //     socket.emit(payload);
    //     dispatch(deleteMessage(p))
    // }

    // channelId in dependency 

    const submitChat = (e) => {
        e.preventDefault();

        // socket.emit("chat", {user: user?.username, msg: content})

        const payload = {
            content
        }
        dispatch(createChannelMessage(channelId, payload))
        setContent("")

        const container = document.querySelector('.chats-container')

        const childNodes = container.children;

        const lastNode = childNodes[childNodes.length - 1];

       if (lastNode.className == 'each-chat-container') {
            lastNode.scrollIntoView(true);
       }

        
    }
    return (
        <div className='chat-field-container' id='scroll-to'>
            <form className='chat-field-form' onSubmit={submitChat}>
                <label htmlFor='content'></label>
                <input className='chat-field-input'
                name='content'
                type='text'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                >
                </input>
                <button id='chat-submit'></button>
            </form>
        </div>
    )
}

export default ChatField;
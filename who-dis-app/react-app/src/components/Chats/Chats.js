import './chats.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EachChat from '../EachChat/EachChat';
import { getAllUsers } from '../../store/allusers';
import { Route } from 'react-router-dom';

const Chats = ({channelId}) => {
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getAllUsers())
    }, [channelId]);

    const allMessages = useSelector((state) => state.channelMessages);
    const messages = Object.values(allMessages);


    return (
        <div className='chats-container'>
            {
               messages.length ?   messages.map((msg, i) => (
                    <Route to='/servers/:id/:channelId'>
                <EachChat key={i} msg={msg} channelId={channelId}/>
                    </Route>
                )) :
                <div id='no-channels-msg'>
                    <p id='no-channels-text'>No channel messages to display.</p>
                </div>
            }
        </div>
    )
}

export default Chats;
import './chatarea.css'
import {useParams} from 'react-router-dom';
import ChatField from '../ChatField/ChatField';
import Chats from '../Chats/Chats';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
const ChatArea = () => {
    const {id, channelId} = useParams();

    const allServers = useSelector((state) => state.servers);
    const servers = Object.values(allServers);
    const currentServer = servers.find(server => server?.id == id);
    const bannerUrl = currentServer?.banner_url;
    return (
        // if id exists, display all chats
        <>
        
        <div className='chat-area-container'>
            <div className='chat-area-header'>
                <p id="whodis-chat-header">WhoDis?</p>
            </div>
            <div className='chat-area-main'>
                <div className='chat-housing'>
                <Chats channelId={id}/>
                </div>
            </div>
            { channelId !== undefined ?
            <div className='chat-area-footer'>
                <Route path='/servers/:id/:channelId'>
                <ChatField channelId={channelId}/>
                </Route>
            </div> :
            <div id='no-channel-footer'>
               <p id='no-channel-footer-text'> visit a channel to send a message!</p>
            </div>
            }
        </div>
        </>
    )
}
export default ChatArea;
import './profilesidebar.css'
import { logout } from '../../store/session';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ProfileSideBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutUser = () => {
        dispatch(logout())
    }

    return (
        <div className='profile-sidebar-container'>
            <div className='sidebar-options'>
                <div className='options-logout' onClick={() => logoutUser()}>
                    <p id='options-logout-text'>Logout</p>
                </div>
                <div className='back-to-app' onClick={() => history.push('/servers/@me')}>
                    <p id='back-to-app-text'>Back to WhoDis?</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileSideBar
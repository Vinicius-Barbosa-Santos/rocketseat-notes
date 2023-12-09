// import Styles
import * as C from './styles'

// import React Icons
import { FaPowerOff } from "react-icons/fa6";

// import React Router
import { Link } from 'react-router-dom';

// import Context
import { useAuth } from '../../contexts/AuthContext'

// import API
import { api } from '../../services/api'

// import Assets
import profile from '../../assets/avatar_placeholder.svg'

export const Header = () => {

    const { user, signOut } = useAuth()

    const userAvatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : profile

    return (
        <C.HeaderContainer>
            <C.LeftSide>
                <C.AvatarProfile>
                    <Link to={'/profile'}>
                        <img src={userAvatar} alt="Avatar Profile" />
                    </Link>

                    <C.AvatarProfileText>
                        <span>Bem vindo,</span>
                        <strong>{user.name}</strong>
                    </C.AvatarProfileText>
                </C.AvatarProfile>
            </C.LeftSide>

            <C.Logout onClick={signOut}>
                <FaPowerOff size={36} color='#999591' />
            </C.Logout>
        </C.HeaderContainer>
    )
}
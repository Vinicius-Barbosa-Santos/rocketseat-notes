// import Styles
import * as C from './styles'

// import React Icons
import { FaPowerOff } from "react-icons/fa6";

// import React Router
import { Link } from 'react-router-dom';

// import Context
import { useAuth } from '../../contexts/AuthContext'

export const Header = () => {

    const { signOut } = useAuth()

    return (
        <C.HeaderContainer>
            <C.LeftSide>
                <C.AvatarProfile>
                    <Link to={'/profile'}>
                        <img src="https://avatars.githubusercontent.com/u/41848606?v=4" alt="Avatar Profile" />
                    </Link>

                    <C.AvatarProfileText>
                        <span>Bem vindo,</span>
                        <strong>Vinícius Barbosa</strong>
                    </C.AvatarProfileText>
                </C.AvatarProfile>
            </C.LeftSide>

            <C.Logout onClick={signOut}>
                <FaPowerOff size={36} color='#999591' />
            </C.Logout>
        </C.HeaderContainer>
    )
}
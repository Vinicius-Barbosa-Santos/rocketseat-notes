// import Styled
import * as C from './styles'

// import React-Icons
import { RiShutDownLine } from 'react-icons/ri'

// import Context
import { useAuth } from '../../hooks/auth'

// import API 
import { api } from '../../services/api'

// import Assets
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export const Header = () => {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <C.HeaderContainer>
            <C.Profile to={'/profile'}>
                <img
                    src={avatarUrl}
                    alt="Foto do Usuário"
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </C.Profile>

            <C.Logout onClick={signOut}>
                <RiShutDownLine />
            </C.Logout>
        </C.HeaderContainer>
    )
}
// import Styled
import * as C from './styles'

// import React-Icons
import { RiShutDownLine } from 'react-icons/ri'

export const Header = () => {
    return (
        <C.HeaderContainer>
            <C.Profile to={'/profile'}>
                <img
                    src={'https://avatars.githubusercontent.com/u/41848606?v=4'}
                    alt="Foto do Usuário"
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Vinícius Barbosa</strong>
                </div>
            </C.Profile>

            <C.Logout>
                <RiShutDownLine />
            </C.Logout>
        </C.HeaderContainer>
    )
}
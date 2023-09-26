// import Styled
import * as C from './styles'

// import React Icons
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

// import Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// import React-Router-Dom
import { Link } from 'react-router-dom'

export const Profile = () => {
    return (
        <C.ProfileContainer>
            <header>
                <Link to={'/'}>
                    <FiArrowLeft />
                </Link>
            </header>

            <C.Form>
                <C.Avatar>
                    <img
                        src={'https://avatars.githubusercontent.com/u/41848606?v=4'}
                        alt="Foto do Usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id='avatar'
                            type='file'
                        />
                    </label>
                </C.Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title={'Salvar'} />
            </C.Form>
        </C.ProfileContainer>
    )
}
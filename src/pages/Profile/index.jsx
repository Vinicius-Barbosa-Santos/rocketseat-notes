// import Styled
import * as C from './styles'

// import React Icons
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

// import Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// import React-Router-Dom
import { Link } from 'react-router-dom'

// import React
import { useState } from 'react'

// import Context
import { useAuth } from '../../hooks/auth'

// import API 
import { api } from '../../services/api'

// import Assets
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export const Profile = () => {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState('')
    const [passwordNew, setPasswordNew] = useState('')

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const handleUpdate = async () => {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({ user, avatarFile })
    }

    const handleChangeAvatar = (event) => {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

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
                        src={avatar}
                        alt="Foto do Usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id='avatar'
                            type='file'
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </C.Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    value={passwordOld}
                    onChange={(e) => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    value={passwordNew}
                    onChange={(e) => setPasswordNew(e.target.value)}
                />

                <Button title={'Salvar'} onClick={handleUpdate} />
            </C.Form>
        </C.ProfileContainer>
    )
}
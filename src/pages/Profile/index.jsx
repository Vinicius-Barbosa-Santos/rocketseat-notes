// import Styles
import * as C from './styles'

// import React Icons
import { FiUser } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { LuCamera } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";

// import Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// import Context
import { useAuth } from '../../contexts/AuthContext'

// import React
import { useState } from 'react';

// import API
import { api } from '../../services/api'

// import Assets
import profile from '../../assets/avatar_placeholder.svg'

export const Profile = () => {

    const { updateProfile, user } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [old_password, setOldPassword] = useState('')
    const [password, setPassword] = useState('')

    const userAvatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : profile

    const [avatar, setAvatar] = useState(userAvatar)
    const [avatarFile, setAvatarFile] = useState(null)

    const handleUpdateProfile = () => {
        const user = {
            name,
            email,
            old_password,
            password
        }

        updateProfile({ user, avatarFile })
    }

    const handleAvatar = (event) => {
        const file = event.target.files[0]
        setAvatarFile(file)

        const urlImg = URL.createObjectURL(file)
        setAvatar(urlImg)
    }

    return (
        <C.Container>
            <C.ButtonBack to={'/'}>
                <GoArrowLeft size={50} color='gray' />
            </C.ButtonBack>

            <C.AvatarProfile>
                <C.AvatarContent>
                    <img src={avatar} alt="Avatar Profile" />

                    <C.Camera
                        htmlFor='avatar'
                    >
                        <LuCamera size={20} />

                        <input
                            id='avatar'
                            type="file"
                            onChange={handleAvatar}
                        />
                    </C.Camera>
                </C.AvatarContent>
            </C.AvatarProfile>

            <C.Content>
                <Input
                    type={'text'}
                    icon={FiUser}
                    value={name}
                    placeholder={'Nome'}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    type={'email'}
                    icon={AiOutlineMail}
                    value={email}
                    placeholder={'E-mail'}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type={'password'}
                    icon={FaLock}
                    value={old_password}
                    placeholder={'Senha Antiga'}
                    onChange={(e) => setOldPassword(e.target.value)}
                />

                <Input
                    type={'password'}
                    icon={FaLock}
                    value={password}
                    placeholder={'Senha Nova'}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button title={'Salvar'} onClick={handleUpdateProfile} />
            </C.Content>
        </C.Container>
    )
}
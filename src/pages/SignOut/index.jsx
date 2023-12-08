// import Styles
import * as C from './styles'

// import Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

// import React Icons
import { FiUser } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

// import React Router
import { Link, useNavigate } from 'react-router-dom';

// import React
import { useState } from 'react';

// import API
import { api } from '../../services/api'

export const SignOut = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleRegister = () => {
        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário Cadastrado com sucesso!')
                navigate('/')
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível cadastrar o usuário!')
                }
            })
    }

    return (
        <C.Container>
            <C.Banner />

            <C.User>
                <C.UserContent>
                    <h1>Rocket Notes</h1>

                    <p>
                        Aplicação para salvar e gerenciar seus links úteis.
                    </p>

                    <h2>Crie sua conta</h2>

                    <C.InputContent>
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
                            value={password}
                            placeholder={'Senha'}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <C.ButtonAuthenticated>
                            <Button title={'Cadastrar'} onClick={handleRegister} />
                        </C.ButtonAuthenticated>
                    </C.InputContent>

                    <Link to={'/'}>
                        <ButtonText title={'Voltar para o login'} isActive />
                    </Link>
                </C.UserContent>
            </C.User>
        </C.Container>
    )
}
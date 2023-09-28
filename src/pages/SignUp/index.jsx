// import Styled
import * as C from './styles'

// import Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// import React-Icons
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

// import React-Router-Dom
import { Link, useNavigate } from 'react-router-dom'

// import React
import { useState } from 'react'

// import API
import { api } from '../../services/api'

export const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSignUp = () => {
        if (name && email && password) {
            api.post('/users', { name, email, password })
                .then(() => {
                    alert('Usuário Cadastrado com sucesso!')
                    navigate('/')
                })
                .catch((error) => {
                    if (error.response) {
                        alert(error.response.data.message)
                    } else {
                        alert('Não foi possível cadastrar')
                    }
                })
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <C.Container>
            <C.Background />

            <C.Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button title={'Cadastrar'} onClick={handleSignUp} />

                <Link to={'/'}>
                    Voltar para o login
                </Link>
            </C.Form>
        </C.Container>
    )
}
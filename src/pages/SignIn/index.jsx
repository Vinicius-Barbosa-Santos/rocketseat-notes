// import Styles
import * as C from './styles'

// import Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

// import React Icons
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

// import Link
import { Link } from 'react-router-dom';

// import React
import { useState } from 'react';

// import Context
import { useAuth } from '../../contexts/AuthContext'

export const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    const handleSignIn = () => {
        signIn({ email, password })
    }

    return (
        <C.Container>
            <C.User>
                <C.UserContent>
                    <h1>Rocket Notes</h1>

                    <p>
                        Aplicação para salvar e gerenciar seus links úteis.
                    </p>

                    <h2>Faça seu login</h2>

                    <C.InputContent>
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
                            <Button title={'Entrar'} onClick={handleSignIn} />
                        </C.ButtonAuthenticated>
                    </C.InputContent>

                    <Link to={'/register'}>
                        <ButtonText title={'Criar Conta'} isActive />
                    </Link>
                </C.UserContent>
            </C.User>

            <C.Banner />
        </C.Container>
    )
}
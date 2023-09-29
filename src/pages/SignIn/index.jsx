// import Styled
import * as C from './styles'

// import Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// import React-Icons
import { FiMail, FiLock } from 'react-icons/fi'

// import React-Router-Dom
import { Link } from 'react-router-dom'

// import Context
import { useAuth } from '../../hooks/auth'

// import React 
import { useState } from 'react'

export const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    const handleSignIn = () => {
        signIn({ email, password })
    }

    return (
        <C.Container>
            <C.Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links</p>

                <h2>Faça seu Login</h2>

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

                <Button title={'Entrar'} onClick={handleSignIn} />

                <Link to={'/register'}>
                    Criar Conta
                </Link>
            </C.Form>

            <C.Background />
        </C.Container>
    )
}
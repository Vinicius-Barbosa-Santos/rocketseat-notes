// import Styled
import * as C from './styles'

// import Components
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// import React-Icons
import { FiMail, FiLock } from 'react-icons/fi'

export const SignIn = () => {
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
                />

                <Input
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                />

                <Button title={'Entrar'} />

                <a href="#">
                    Criar Conta
                </a>
            </C.Form>

            <C.Background />
        </C.Container>
    )
}
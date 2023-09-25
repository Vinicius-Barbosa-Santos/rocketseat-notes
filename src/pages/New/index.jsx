// import Styled
import * as C from './styles'

// import Components
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/Header'

export const New = () => {
    return (
        <C.NewContainer>
            <Header />

            <main>
                <C.Form>
                    <header>
                        <h1>Criar nota</h1>

                        <a href="/">voltar</a>
                    </header>

                    <Input
                        placeholder="Título"
                    />

                    <TextArea 
                        placeholder="Observações"
                    />
                </C.Form>
            </main>
        </C.NewContainer>
    )
}
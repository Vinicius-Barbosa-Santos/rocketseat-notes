// import Styled
import * as C from './styles'

// import Components
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'

// import React-Router-Dom
import { Link } from 'react-router-dom'

export const New = () => {
    return (
        <C.NewContainer>
            <Header />

            <main>
                <C.Form>
                    <header>
                        <h1>Criar nota</h1>

                        <Link to={'/'}>voltar</Link>
                    </header>

                    <Input
                        placeholder="Título"
                    />

                    <TextArea
                        placeholder="Observações"
                    />

                    <Section title={'Links úteis'}>
                        <NoteItem value={'https://rocketseat.com.br'} />
                        <NoteItem isNew placeholder="Novo Link" />
                    </Section>

                    <Section title={'Marcadores'}>
                        <div className='tags'>
                            <NoteItem value={'react'} />
                            <NoteItem isNew placeholder="Novo Tag" />
                        </div>
                    </Section>

                    <Button title={'Salvar'} />
                </C.Form>
            </main>
        </C.NewContainer>
    )
}
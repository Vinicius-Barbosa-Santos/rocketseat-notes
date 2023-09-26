// import Styled 
import * as C from './styles'

// import Components
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

// import React-Icons
import { FiPlus } from 'react-icons/fi'

export const Home = () => {
    return (
        <C.HomeContainer>
            <C.Brand>
                <h1>Rocketnotes</h1>
            </C.Brand>

            <Header />

            <C.Menu>
                <li><ButtonText title={'Todos'} isActive /></li>
                <li><ButtonText title={'React'} /></li>
                <li><ButtonText title={'Node'} /></li>
            </C.Menu>

            <C.Search>
                <Input placeholder="Pesquisar pelo título" />
            </C.Search>

            <C.Content>
                <Section title={'Minhas Notas'}>
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: 1, name: 'react' },
                            { id: 2, name: 'rocketseat' },
                        ]
                    }}
                    />
                </Section>
            </C.Content>

            <C.NewNote to={'/new'}>
                <FiPlus />
                Criar Nota
            </C.NewNote>
        </C.HomeContainer>
    )
}
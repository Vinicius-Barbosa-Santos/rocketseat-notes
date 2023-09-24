// import Styled 
import * as C from './styles'

// import Components
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

// import React-Icons
import { FiPlus, FiSearch } from 'react-icons/fi'

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
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </C.Search>

            <C.Content>

            </C.Content>

            <C.NewNote>
                <FiPlus />
                Criar Nota
            </C.NewNote>
        </C.HomeContainer>
    )
}
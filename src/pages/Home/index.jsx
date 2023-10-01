/* eslint-disable react/jsx-key */
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

// import React
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export const Home = () => {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    const handleTagSelected = (tagName) => {
        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    const fetchTags = async () => {
        const response = await api.get('/tags')
        setTags(response.data)
    }

    useEffect(() => {
        fetchTags()
    }, [])

    return (
        <C.HomeContainer>
            <C.Brand>
                <h1>Rocketnotes</h1>
            </C.Brand>

            <Header />

            <C.Menu>
                <li>
                    <ButtonText 
                        title={'Todos'} 
                        isActive={tagsSelected.length === 0}
                        onClick={() => handleTagSelected('all')}
                    />
                </li>
                {tags && tags.map((tag) => (
                    <li
                        key={String(tag.id)}
                    >
                        <ButtonText 
                            title={tag.name} 
                            onClick={() => handleTagSelected(tag.name)}
                            isActive={tagsSelected.includes(tag.name)}
                        />
                    </li>
                ))}
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
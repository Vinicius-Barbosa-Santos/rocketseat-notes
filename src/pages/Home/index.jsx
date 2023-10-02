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

// import API
import { api } from '../../services/api'

// import React
import { useState, useEffect } from 'react'

// import UseNavigate
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState('')
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    const handleTagSelected = (tagName) => {
        if (tagName === 'all') {
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }

    const fetchTags = async () => {
        const response = await api.get('/tags')
        setTags(response.data)
    }

    const fetchNotes = async () => {
        const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
        setNotes(response.data)
    }

    useEffect(() => {
        fetchTags()
    }, [])

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tagsSelected, search])

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
                <Input
                    value={search}
                    placeholder="Pesquisar pelo título"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </C.Search>

            <C.Content>
                <Section title={'Minhas Notas'}>
                    {
                        notes.map((note) => (
                            <Note
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                </Section>
            </C.Content>

            <C.NewNote to={'/new'}>
                <FiPlus />
                Criar Nota
            </C.NewNote>
        </C.HomeContainer>
    )
}
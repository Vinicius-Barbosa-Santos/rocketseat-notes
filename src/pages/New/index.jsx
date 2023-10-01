/* eslint-disable react/jsx-key */
// import Styled
import * as C from './styles'

// import Components
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'

// import UseNavigate
import { useNavigate } from 'react-router-dom'

// import API 
import { api } from '../../services/api'

// import React-Router-Dom
import { Link } from 'react-router-dom'

// import React
import { useState } from 'react'

export const New = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState('')

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    const navigate = useNavigate()

    const handleAddLink = () => {
        setLinks(prevState => [...prevState, newLink])
        setNewLink('')
    }

    const handleRemoveLink = (deleted) => {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    const handleAddTag = () => {
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    const handleRemoveTag = (deleted) => {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    const handleNewNote = async () => {
        if(!title) {
            return alert('Digite o título da nota')
        }

        if(newLink) {
            return alert('Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio')
        }

        if(newTag) {
            return alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio')
        }

        await api.post('/notes', {
            title,
            description,
            tags,
            links
        })

        alert('Nota Criada com sucesso!')
        navigate('/')
    }

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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <TextArea
                        placeholder="Observações"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Section title={'Links úteis'}>
                        {links.map((link, index) => (
                            <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => handleRemoveLink(link)}
                            />
                        ))}
                    </Section>

                    <NoteItem
                        isNew
                        placeholder={'Novo Link'}
                        value={newLink}
                        onChange={(e) => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                    />

                    <Section title={'Marcadores'}>
                        <div className='tags'>
                            {tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))}

                            <NoteItem
                                isNew
                                placeholder="Novo Tag"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button
                        title={'Salvar'}
                        onClick={handleNewNote}
                    />
                </C.Form>
            </main>
        </C.NewContainer>
    )
}
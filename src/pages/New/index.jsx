// import Styled Components
import * as C from './styles'

// import Components
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Session } from '../../components/Session'
import { NoteItem } from '../../components/NoteItem'
import { ButtonText } from '../../components/ButtonText'

// import React Router
import { Link, useNavigate } from 'react-router-dom'

// import React
import { useState } from 'react'

// import API
import { api } from '../../services/api'

export const New = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState('')

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    const handleAddLink = () => {
        if (newLink) {
            setLinks(prevState => [...prevState, newLink])
            setNewLink('')
        }
    }

    const handleDeleteLink = (linkItem) => {
        setLinks(links.filter(link => link !== linkItem))
    }

    const handleAddTag = () => {
        if (newTag) {
            setTags(prevState => [...prevState, newTag])
            setNewTag('')
        }
    }

    const handleDeleteTag = (tagItem) => {
        setTags(tags.filter(tag => tag !== tagItem))
    }

    const handleAddNote = async () => {
        if (!title) {
            return alert('Informe o título da nota')
        }

        if (newLink) {
            return alert('Você inseriu o link, mas não adicionou')
        }

        if (newTag) {
            return alert('Você inseriu a tag, mas não adicionou')
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
        <C.Container>
            <Header />

            <C.Content>
                <C.ContentTop>
                    <h1>Criar Nota</h1>

                    <Link to={'/'}>
                        <ButtonText title={'Voltar'} />
                    </Link>
                </C.ContentTop>

                <Input
                    type={'text'}
                    value={title}
                    placeholder={'Título'}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    value={description}
                    placeholder='Observações'
                    onChange={(e) => setDescription(e.target.value)}
                />

                <Session
                    title={'Links úteis'}
                >
                    {
                        links && links.map((link, index) => (
                            <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => handleDeleteLink(link)}
                            />
                        ))
                    }

                    <NoteItem
                        isNew
                        value={newLink}
                        placeholder={'Novo Link'}
                        onChange={(e) => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                    />
                </Session>

                <C.MarkItem>
                    <Session
                        title={'Marcadores'}
                    >
                        <C.SessionFlex>
                            {
                                tags && tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleDeleteTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem
                                isNew
                                value={newTag}
                                placeholder={'Novo Marcador'}
                                onChange={(e) => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </C.SessionFlex>

                        <Button title={'Salvar'} onClick={handleAddNote} />
                    </Session>
                </C.MarkItem>
            </C.Content>
        </C.Container>
    )
}
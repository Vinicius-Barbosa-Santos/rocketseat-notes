// import Styles
import * as C from './styles'

// import Components
import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Session } from '../../components/Session'
import { ButtonText } from '../../components/ButtonText'

// import React
import { useEffect, useState } from 'react'

// import API
import { api } from '../../services/api'

// import React Router Dom
import { useParams, useNavigate } from 'react-router-dom'

export const Details = () => {

    const [data, setData] = useState([])

    const params = useParams()
    const navigate = useNavigate()

    const fetchDetails = async () => {
        const response = await api.get(`/notes/${params.id}`)
        setData(response.data)
    }

    const handleDeleteNote = async () => {

        const confirm = window.confirm('Deseja deletar essa nota')

        if (confirm) {
            await api.delete(`/notes/${params.id}`)
            alert('Nota Deletada')
            navigate(-1)
        }
    }

    useEffect(() => {
        fetchDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <C.Container>
            <Header />

            <main>
                <C.Content>
                    <ButtonText title={'Excluir a nota'} isActive onClick={handleDeleteNote} />

                    {
                        data &&

                        <>
                            <h1>{data.title}</h1>

                            <p>
                                {data.description}
                            </p>

                            <Session
                                title={'Links úteis'}
                            >
                                <C.Links>
                                    {
                                        data.links && data.links.map(link => (
                                            <li key={link}><a href={link.url} target='_blanck'>{link.url}</a></li>
                                        ))
                                    }
                                </C.Links>
                            </Session>

                            <C.LastSection>
                                <Session
                                    title={'Marcadores'}
                                >
                                    <C.TagsContent>
                                        {
                                            data.tags && data.tags.map(tag => (
                                                <Tag key={tag.id} title={tag.name} />
                                            ))
                                        }
                                    </C.TagsContent>
                                </Session>
                            </C.LastSection>

                            <Button title={'Voltar'} onClick={handleBack} />
                        </>
                    }
                </C.Content>
            </main>
        </C.Container>
    )
}
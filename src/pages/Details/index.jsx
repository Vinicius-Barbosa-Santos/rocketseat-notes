// import Styled
import * as C from './styles'

// import Components
import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

// import React-Router-Dom
import { useParams, useNavigate } from 'react-router-dom'

// import API
import { api } from '../../services/api'

// import React
import { useState, useEffect } from 'react'

export const Details = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState(null)

  const handleBack = () => {
    navigate('/')
  }

  const fetchNote = async () => {
    const response = await api.get(`/notes/${params.id}`)
    setData(response.data)
  }

  useEffect(() => {
    fetchNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <C.DetailsContainer>
      <Header />

      {data &&
        <main>
          <C.Content>
            <ButtonText title={'Excluir nota'} />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links &&
              <Section title={'Links úteis'}>
                <C.Links>
                  {data.links.map((link) => (
                    // eslint-disable-next-line react/jsx-key, react/jsx-no-target-blank
                    <li key={String(link.id)}><a href={link.url} target='_blank'>{link.url}</a></li>
                  ))}
                </C.Links>
              </Section>
            }

            {data.tags &&
              <Section title={'Marcadores'}>
                {
                  data.tags.map((tag) => (
                    // eslint-disable-next-line react/jsx-key
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))
                }
              </Section>
            }

            <Button title={'Voltar'} onClick={handleBack} />
          </C.Content>
        </main>
      }
    </C.DetailsContainer>
  )
}
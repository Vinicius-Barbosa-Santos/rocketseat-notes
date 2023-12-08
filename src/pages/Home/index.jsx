// import Styles
import * as C from './styles'

// import Components
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Session } from '../../components/Session'
import { ButtonText } from '../../components/ButtonText'

// import React Icons
import { HiMiniPlus } from "react-icons/hi2";

// import React Router
import { Link, useNavigate } from 'react-router-dom'

// import React
import { useEffect, useState } from 'react'

// import API
import { api } from '../../services/api'

export const Home = () => {

  const navigate = useNavigate()

  const [tags, setTags] = useState([])
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [tagsSelected, setTagsSelected] = useState([])

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
  }, [search, tagsSelected])

  const handleTag = (tagName) => {

    if (tagName === 'all') {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      setTagsSelected(tagsSelected.filter(tag => tag !== tagName))
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  const handleDetails = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <C.Container>
      <C.Brand>
        <span>Rocketnotes</span>
      </C.Brand>

      <Header />

      <C.Menu>
        <ul>
          <li>
            <ButtonText
              title={'Todos'}
              onClick={() => handleTag('all')}
              isActive={tagsSelected.length === 0}
            />
          </li>
          {
            tags && tags.map(tag => (
              <li
                key={String(tag.id)}>
                <ButtonText
                  title={tag.name}
                  onClick={() => handleTag(tag.name)}
                  isActive={tagsSelected.includes(tag.name)}
                />
              </li>
            ))
          }
        </ul>
      </C.Menu>

      <C.Search>
        <Input
          type={'search'}
          value={search}
          placeholder={'Pesquisar pelo título'}
          onChange={(e) => setSearch(e.target.value)}
        />
      </C.Search>

      <C.Content>
        <main>
          <C.Notes>
            <Session
              title={'Minhas notas'}
            >
              {
                notes.map((note) => (
                  <Note
                    key={note.id}
                    data={note}
                    onClick={() => handleDetails(note.id)}
                  />
                ))
              }
            </Session>
          </C.Notes>
        </main>
      </C.Content>

      <C.NewNote>
        <HiMiniPlus size={20} />
        <Link to={'/new'}>
          <span>Criar Nota</span>
        </Link>
      </C.NewNote>
    </C.Container>
  )
}
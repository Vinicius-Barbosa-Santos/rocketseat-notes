// import Styled
import * as C from './styles'

// import Components
import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export const Details = () => {
  return (
    <C.DetailsContainer>
      <Header />

      <main>
        <C.Content>
          <ButtonText title={'Excluir nota'} />

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla alias similique fugit minus, porro culpa aliquam, beatae consectetur deleniti cumque praesentium aliquid nesciunt dolore blanditiis quos, soluta voluptas esse sunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla neque tempore maiores veritatis? Id itaque cupiditate unde consequuntur maxime, labore, officiis cum error iure magnam tempora explicabo pariatur odio minima?</p>

          <Section title={'Links úteis'}>
            <C.Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </C.Links>
          </Section>

          <Section title={'Marcadores'}>
            <Tag title={'express'} />
            <Tag title={'nodejs'} />
          </Section>

          <Button title={'Voltar'} />
        </C.Content>
      </main>
    </C.DetailsContainer>
  )
}
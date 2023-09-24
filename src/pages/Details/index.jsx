// import Styled
import * as C from './styles'

// import Components
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export const Details = () => {
  return (
    <C.DetailsContainer>
      <Header />

      <Section title={'Links úteis'}>
        <C.Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </C.Links>
      </Section>

      <Button title={'Voltar'} />
    </C.DetailsContainer>
  )
}
// import Styled
import * as C from './styles'

// import Components
import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../ButtonText'

export const Details = () => {
  return (
    <C.DetailsContainer>
      <Header />

      <ButtonText title={'Excluir nota'}/>

      <Section title={'Links úteis'}>
        <C.Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </C.Links>
      </Section>

      <Section title={'Marcadores'}>
        <Tag title={'express'}/>
        <Tag title={'nodejs'}/>
      </Section>

      <Button title={'Voltar'} />
    </C.DetailsContainer>
  )
}
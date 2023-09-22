import * as C from './styles'

// import Components
import { Button } from '../../components/Button'

export const Details = () => {
  return (
    <C.DetailsContainer>
      <h1>Hello World</h1>
      <span>Vinícius Barbosa</span>

      <Button title={'Login'} loading />
      <Button title={'Cadastrar'} />
      <Button title={'Entrar'} />
    </C.DetailsContainer>
  )
}
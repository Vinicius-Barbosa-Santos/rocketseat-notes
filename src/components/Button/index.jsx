// import Styled
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const Button = ({ title, loading = false, rest }) => {
    return (
        <C.ButtonContainer
            type='button'
            disabled={loading}
            {...rest}
        >
            {loading ? 'Carregando' : title}
        </C.ButtonContainer>
    )
}
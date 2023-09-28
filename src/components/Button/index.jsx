// import Styled
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const Button = ({ title, loading, onClick }) => {
    return (
        <C.ButtonContainer
            type='button'
            disabled={loading}
            onClick={onClick}
        >
            {loading ? 'Carregando' : title}
        </C.ButtonContainer>
    )
}
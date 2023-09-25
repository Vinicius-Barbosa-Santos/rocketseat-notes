// import Styled 
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const TextArea = ({ value, ...rest }) => {
    return (
        <C.TextAreaContainer
            {...rest}
        > 
            {value}
        </C.TextAreaContainer>
    )
}
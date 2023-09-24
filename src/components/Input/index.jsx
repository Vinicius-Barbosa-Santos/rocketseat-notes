// import Styled
import * as C from './styles'


// eslint-disable-next-line react/prop-types
export const Input = ({ icon: Icon, ...rest }) => {
    return (
        <C.InputContainer>
            {Icon && <Icon size={20} />}
            <input
                {...rest}
            />
        </C.InputContainer>
    )
}
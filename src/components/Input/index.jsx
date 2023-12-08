// import Styles Components
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const Input = ({ type, icon: Icon, placeholder, ...rest }) => {
    return (
        <C.Container>
            {Icon && <Icon size={20} color={'#666360'} />}
            <input
                type={type}
                placeholder={placeholder}
                {...rest}
            />
        </C.Container>
    )
}
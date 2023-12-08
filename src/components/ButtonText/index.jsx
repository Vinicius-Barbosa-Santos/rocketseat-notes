// import Styles
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const ButtonText = ({ title, isActive, ...rest }) => {
    return (
        <C.Container
            $isactive={isActive}
            {...rest}
        >
            {title}
        </C.Container>
    )
}
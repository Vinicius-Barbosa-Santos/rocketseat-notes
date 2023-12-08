// import Styles
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const Button = ({ title, ...rest }) => {
    return (
        <C.Container
            {...rest}
        >
            {title}
        </C.Container>
    )
}
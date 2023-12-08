// import Styles
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const Session = ({ title, children }) => {
    return (
        <C.Container>
            <h2>{title}</h2>
            <C.Line />

            {children}
        </C.Container>
    )
}
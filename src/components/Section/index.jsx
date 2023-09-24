// import Styled
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const Section = ({ title, children }) => {
    return (
        <C.SectionContainer>
            <h2>{title}</h2>
            {children}
        </C.SectionContainer>
    )
}
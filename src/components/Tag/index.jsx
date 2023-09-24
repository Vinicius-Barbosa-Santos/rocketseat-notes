// import Styled
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const Tag = ({ title, ...rest }) => {
    return (
        <C.TagsContainer
            {...rest}
        >
            {title}
        </C.TagsContainer>
    )
}
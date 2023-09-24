import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const Tag = ({ title }) => {
    return (
        <C.TagsContainer>
            {title}
        </C.TagsContainer>
    )
}
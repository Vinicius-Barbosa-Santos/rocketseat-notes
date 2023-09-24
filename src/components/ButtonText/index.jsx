import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const ButtonText = ({title, ...rest}) => {
    return(
        <C.ButtonTextContainer
            type='button'
            {...rest}
        >
            {title}
        </C.ButtonTextContainer>
    )
}

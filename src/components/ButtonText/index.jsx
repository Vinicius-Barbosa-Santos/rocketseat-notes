// import Styled
import * as C from './styles'

// eslint-disable-next-line react/prop-types
export const ButtonText = ({title, isActive = false, ...rest}) => {
    return(
        <C.ButtonTextContainer
            type='button'
            $isactive={isActive.toString()}
            {...rest}
        >
            {title}
        </C.ButtonTextContainer>
    )
}

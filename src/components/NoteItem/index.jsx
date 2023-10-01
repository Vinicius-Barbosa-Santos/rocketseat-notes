// import Styled
import * as C from './styles'

// import React-Icons
import { FiPlus, FiX } from 'react-icons/fi'

// eslint-disable-next-line react/prop-types
export const NoteItem = ({ isNew = false, value, onClick, ...rest }) => {
    return (
        <C.NoteItemContainer
            $isnew={isNew}
        >
            <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type='button'
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </C.NoteItemContainer>
    )
}
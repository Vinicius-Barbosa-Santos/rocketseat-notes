// import Styles
import * as C from './styles'

// import React Icons
import { FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export const NoteItem = ({ value, isNew = false, onClick, ...rest }) => {
    return (
        <C.Container
            $isnew={isNew}
        >
            <input
                type="text"
                readOnly={!isNew}
                value={value}
                {...rest}
            />

            <button
                type='button'
                onClick={onClick}
            >
                {isNew ? <FiPlus size={24} color='#FF9000' /> : <MdClose size={24} color='#FF002E' />}
            </button>
        </C.Container>
    )
}
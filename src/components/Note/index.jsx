/* eslint-disable react/prop-types */

// import Styles
import * as C from './styles'

// import Components
import { Tag } from '../Tag'

// eslint-disable-next-line react/prop-types
export const Note = ({ data, ...rest }) => {

    return (
        <C.Container
            {...rest}
        >
            <h1>{data.title}</h1>

            {
                data.tags &&
                <footer>
                    {data.tags.map(tag => (<Tag key={tag.id} title={tag.name} />))}
                </footer>
            }
        </C.Container>
    )
}
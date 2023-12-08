import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: auto;
    height: 24px;

    padding: 0 10px;
    margin-right: 6px;
    
    border-radius: 5px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    background-color: ${({theme}) => theme.COLORS.ORANGE};
`
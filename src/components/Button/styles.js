import { styled } from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 3.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 10px;
    margin-bottom: 1.875rem;
    background-color: ${({theme}) => theme.COLORS.ORANGE};
`
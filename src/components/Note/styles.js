import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;

    margin-bottom: 1.25rem;

    cursor: pointer;

    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    > h1 {
        padding: 1rem 1.375rem 1.5rem;
    }

    > footer {
        display: flex;

        padding: 0px 1.25rem 1rem;
    }
`


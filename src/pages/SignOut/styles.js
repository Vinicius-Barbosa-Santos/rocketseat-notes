import { styled } from "styled-components";

// import Assets
import fundo from '../../assets/fundo.jpg'

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: auto 637px;

    @media(max-width: 768px) {
        grid-template-columns: auto;
    }
`

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const UserContent = styled.div`
    margin: 0 auto;
    max-width: 340px;
    text-align: center;

    padding: 1.25rem 0;

    > h1 {
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};

        @media(max-width: 380px) {
            padding: 0 0.938rem;
        }
    }

    > p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        @media(max-width: 380px) {
            padding: 0 1.875rem;
        }
    }

    > h2 {
        margin: 3rem 0;
    }
`

export const Banner = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${fundo});

    @media(max-width: 768px) {
        display: none;
    }
`

export const ButtonAuthenticated = styled.div`
    margin: 1.5rem 0 7.75rem;
`

export const InputContent = styled.div`
    padding: 0 1.25rem;
`
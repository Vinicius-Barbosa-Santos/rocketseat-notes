import { styled } from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 9rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const ButtonBack = styled(Link)`
    border: 0;
    background: transparent;

    > svg {
        margin: 2.938rem 9rem;
    }

    @media(max-width: 728px) {
        > svg {
            margin: 2.938rem 1.25rem;
        }
    }

    @media(max-width: 280px) {
        > svg {
            margin: 2.938rem 0.625rem;
        }
    }
`

export const AvatarProfile = styled.div`
    margin-top: -6.125rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const AvatarContent = styled.div`
    position: relative;

    > img {
        height: 186px;
        height: 186px;

        border-radius: 50%;
    }
`

export const Camera = styled.label`
    position: absolute;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    cursor: pointer;
    margin-top: -50px;

    > input {
        display: none;
    }

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`

export const Content = styled.div`
    padding: 0 1.25rem;
    max-width: 340px;

    margin: 4rem auto 0;

    > div:nth-child(2), > div:nth-child(4) {
        margin-bottom: 1.5rem;
    }
`
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const LeftSide = styled.div`
    padding: 1.25rem 2.813rem;

    @media(max-width: 728px) {
        padding: 1.25rem;
    }
`

export const AvatarProfile = styled.div`
    display: flex;

    img {
        width: 4.375rem;
        height: 4.375rem;

        border-radius: 50%;
    }
`

export const AvatarProfileText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > strong {
        font-size: 1.125rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    margin-left: 0.563rem;
`

export const Logout = styled.button`
    border: 0;
    cursor: pointer;
    background: transparent;

    padding: 2.188rem 2.5rem;
`
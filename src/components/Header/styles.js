import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

    @media(max-width: 425px) {
        padding: 0 20px;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        line-height: 24px;
        margin-left: 16px;
        flex-direction: column;

        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        font-size: 36px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
`
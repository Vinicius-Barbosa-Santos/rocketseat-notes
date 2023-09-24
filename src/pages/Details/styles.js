import styled from "styled-components";

export const DetailsContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
        "header"
        "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }
`

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`

export const Content = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 550px;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    > h1 {
        padding-top: 64px;
        font-size: 36px;
        font-weight: 500;
    }

    > p {
        margin-top: 16px;
        font-size: 16px;
        text-align: justify;
    }
`
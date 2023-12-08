import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 106px auto;
    grid-template-areas: 
        "header"
        "content"
    ;
`

export const Content = styled.div`
    grid-area: content;
    margin: 0 auto;
    
    width: 600px;

    > textarea {
        width: 100%;
        resize: none;

        margin-top: 1rem;
        margin-bottom: 2.125rem;

        height: 9.375rem;
        padding: 0.938rem;

        border: 0;
        border-radius: 0.625rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }

    @media(max-width: 425px) {
        width: 90%;
        padding: 0 1.25rem;
    }
`

export const ContentTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 3.063rem;
    margin-bottom: 2.25rem;
`

export const MarkItem = styled.div`
    margin-top: 2.938rem;

    button {
        margin-top: 2.125rem;
    }
`

export const SessionFlex = styled.div`
    display: grid;
    gap: 1.188rem;

    grid-template-columns: repeat(2, 1fr);
`
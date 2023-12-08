import { styled } from 'styled-components'

export const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        "header"
        "content"
    ;
`

export const Content = styled.div`
    grid-area: content;
    
    height: 100%;
    max-width: 550px;
    overflow-y: auto;

    padding: 0 1.25rem;

    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;

    > button:first-child {
        margin: 4rem 0;
        text-align: right;
    }

    > h1 {
        font-weight: 500;
        font-size: 2.25rem;
        margin-bottom: 1.25rem;
    }

    > p {
        font-size: 1rem;
        text-align: justify;

        margin-bottom: 3.375rem;
    }
`

export const Links = styled.ul`
    list-style: none;

    li a {
        display: block;
        margin-bottom: 0.688rem;
        
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`

export const LastSection = styled.div`
    margin-top: 1.438rem;
    margin-bottom: 8.375rem;
`

export const TagsContent = styled.div`
    display: flex;
`
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 106px 128px auto 80px;
    
    grid-template-areas: 
        "brand header"
        "menu search"
        "menu content"
        "newnote content"
    ;

    @media(max-width: 768px) {
        grid-template-columns: repeat(1fr);
        grid-template-rows: 106px auto;
        grid-template-areas: 
            "header header"
            "content content"
        ;
    }
`

export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    align-items: center;
    justify-content: center;

    > span {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    @media(max-width: 768px) {
        display: none;
    }
`

export const Search = styled.div`
    grid-area: search;
    padding: 4.375rem 1.25rem;

    @media(max-width: 768px) {
        display: none;
    }
`

export const Menu = styled.nav`
    text-align: center;
    list-style: none;

    padding-top: 4rem;

    ul li {
        padding: 0.625rem;
    }

    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    @media(max-width: 768px) {
        display: none;
    }
`

export const Content = styled.div`
    grid-area: content;
    padding: 0 1.25rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Notes = styled.div`
    padding: 0 5px;
    margin-top: 4rem;
`

export const NewNote = styled.button`
    grid-area: newnote;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    > a {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
    
    border: 0;
    background: transparent;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    @media(max-width: 768px) {
        display: none;
    }
`
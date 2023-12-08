import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.25rem;

    gap : 1.25rem;

    margin-bottom: 1.188rem;

    > input {
        border: 0;
        background: transparent;

        width: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > button {
        border: 0;
        padding: 0;
        margin: 0;

        background: transparent;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    border-radius: 10px;
    border: dashed 2px ${({ theme, $isnew }) => $isnew ? theme.COLORS.GRAY_300 : 'none'};
    background-color: ${({ theme, $isnew }) => $isnew ? 'transparent' : theme.COLORS.BACKGROUND_900};
`
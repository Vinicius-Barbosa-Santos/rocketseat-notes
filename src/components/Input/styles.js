import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    > input {
        border: 0;
        width: 100%;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    height: 56px;

    padding: 20px;
    border-radius: 8px;
    margin-bottom: 8px;

    gap: 12px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`
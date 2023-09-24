import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        width: 100%;
        height: 56px;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        margin-left: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

`
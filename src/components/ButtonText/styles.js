import styled from "styled-components";

export const Container = styled.button`
    border: 0;

    background: transparent;
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
`
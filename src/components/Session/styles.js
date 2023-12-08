import { styled } from 'styled-components'

export const Container = styled.div`
    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`

export const Line = styled.div`
    margin: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`
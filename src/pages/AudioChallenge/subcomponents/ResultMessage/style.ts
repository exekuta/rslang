import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
  isCorrect: boolean;
}>`
  ${({ theme, isCorrect }) => {
    const pallete = isCorrect ? theme.pallets.success : theme.pallets.error;
    return css`
      display: flex;
      gap: ${theme.spacing(2)};
      color: ${pallete[600].string()};
      font-size: 20px;
      align-items: center;

      > svg {
        color: ${pallete[700].string()};
        font-size: 50px;
      }
    `;
  }}
`;

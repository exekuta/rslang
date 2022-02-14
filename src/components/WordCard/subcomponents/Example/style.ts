import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Sentence = styled.p`
  ${({ theme }) => css`
    font-size: 18px;
    font-weight: 500px;
    color: ${theme.pallets.text[300].string()};
  `}
`;

export const Translation = styled.p`
  ${({ theme }) => css`
    color: ${theme.pallets.text[400].string()};
    font-size: 17px;
    font-weight: 400;
    display: flex;
    & > svg {
      font-size: 18px;
      flex: 0 0 auto;
      vertical-align: middle;
      color: ${theme.pallets.text[300].string()};
    }
  `}
`;

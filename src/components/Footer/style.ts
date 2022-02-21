import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-top: 2px solid  ${theme.pallets.inactive[100].string()}
  `}
`;

export const RsSchoolLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.pallets.inactive[400].string()};
    > svg {
      height: 30px;
    }
  `}
`;

export const CopyText = styled.small`
  ${({ theme }) => css`
    color: ${theme.pallets.inactive[400].string()};
    font-size: 16px;
    cursor: default;
  `}
`;

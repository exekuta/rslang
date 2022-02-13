import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    min-height: 120px;
    border-top: 2px solid ${theme.pallets.inactive[300].string()};
    display: flex;
    align-items: center;
    margin-top: auto;
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

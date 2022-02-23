import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    height: 69px;
    width: 154px;
    color: ${theme.pallets.primary[500].string()};
    background-color: white;
    border-radius: 10px;
    margin-left: 100px;
    margin-top: 100px;
    @media (max-width: 900px) {
      margin-left: 50px;
    }
    @media (max-width: 800px) {
      margin-top: 50px;
    }
    @media (max-width: 450px) {
      margin-left: 20px;
    }
    &:hover {
      background: ${theme.pallets.primary[200].string()};
      color: white;
    }
  `};
`;

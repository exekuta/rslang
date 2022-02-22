import { homeBackgroundImg } from 'src/assets/img';
import styled, { css } from 'styled-components';

export const Layout = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.pallets.primary[500].string()};
    background-image: url(${homeBackgroundImg});
    background-repeat: no-repeat;
    background-position: right;
    height: 100%;
    width: 100%;
    @media (max-width: 800px) {
      height: 88vh;
    }
  `};
`;

import styled, { css } from 'styled-components';
import bgimg from 'src/assets/img/home-bg.svg';

export const Layout = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.pallets.primary[500].string()};
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
  `};
`;

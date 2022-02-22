/* eslint-disable indent */
import { Container as Footer } from 'src/components/Footer/style';
import { Wrapper as MobileHeader } from 'src/components/MobileHeader/style';
import { Menu } from 'src/components/NavMenu/style';
import styled, { css } from 'styled-components';

export const Container = styled.main`
  overflow: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  > ${Footer} {
    margin-top: auto;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    transition: opacity 200ms ease;
    background-color: rgba(0, 0, 0, 0.2);
    visibility: hidden;
    opacity: 0;
    z-index: 5;
  }
`;

export const Layout = styled.div<{
  isMenuOpen: boolean;
}>`
  ${({ isMenuOpen }) => css`
    display: grid;
    grid-template: 1fr / auto 1fr;
    height: 100vh;
    ${MobileHeader} {
      display: none;
    }
    @media (max-width: 800px) {
      display: block;
      position: relative;
      ${isMenuOpen &&
      css`
        overflow: hidden;
        ${Container}::before {
          opacity: 1;
          visibility: visible;
        }
      `}
      ${MobileHeader} {
        display: block;
      }
      ${Menu} {
        right: 100%;
        position: fixed;
        z-index: 10;
        transition: transform 200ms ease;
        ${isMenuOpen &&
        css`
          transform: translateX(100%);
        `}
      }
    }
  `}
`;

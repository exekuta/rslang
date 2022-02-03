import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Link = styled(NavLink)`
  ${({ theme }) => css`
    font-size: 18px;
    z-index: 1;
    display: flex;
    gap: 15px;
    color: ${theme.pallets.text[500].string()};
    align-items: center;
    font-weight: 500;
    position: relative;
    transition: color 200ms ease;
    & > svg {
      font-size: 24px;
    }
    &:hover {
      color: ${theme.pallets.text[400].string()};
    }
    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      inset: ${theme.spacing(-3)} ${theme.spacing(-3)};
      transition: background-color 100ms ease;
      border-radius: 10px;
    }
    &.active {
      color: ${theme.pallets.text[300].string()};
      &::before {
        background-color: ${theme.pallets.primary[500].alpha(0.15).string()};
      }
    }
  `}
`;

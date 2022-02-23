import styled, { css } from 'styled-components';

export const NumberButton = styled.button<{
  isActive?: boolean;
  isDisabled?: boolean;
}>`
  ${({ theme, isActive }) => css`
    font-size: 18px;
    font-weight: 500;
    padding: ${theme.spacing(2)};
    min-width: 40px;
    border-radius: 10px;
    background-color: transparent;
    transition: background-color 200ms ease, color 200ms ease;
    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
    ${isActive
    && css`
      background-color: ${theme.pallets.primary[500].string()};
      color: white;
    `}
    ${!isActive
    && css`
      &:not(:disabled):hover {
        background-color: ${theme.pallets.primary[100].string()};
      }
    `}
  `}
`;

export const Ellipsis = styled(NumberButton).attrs({
  disabled: true,
})``;

export const ArrowButton = styled.button`
  ${({ theme }) => css`
    font-size: 24px;
    font-weight: 500;
    padding: 0 ${theme.spacing(2)};
    border-radius: 10px;
    display: grid;
    place-items: center;
    transition: background-color 200ms ease;
    background-color: transparent;
    color: ${theme.pallets.primary[500].string()};
    &:not(:disabled) {
      &:hover {
        color: ${theme.pallets.primary[600].string()};
      }
      &:active {
        color: ${theme.pallets.primary[700].string()};
      }
    }
    &:disabled {
      color: ${theme.pallets.inactive[400].string()};
      cursor: default;
    }
  `}
`;

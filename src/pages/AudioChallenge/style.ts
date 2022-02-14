import styled, { css } from 'styled-components';

export const AudioButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.pallets.primary[500].string()};
    color: ${theme.pallets.text[1000].string()};
    font-size: 52px;
    height: 150px;
    width: 150px;
    border-radius: 20px;
    display: grid;
    place-items: center;
    outline: none;
    transition: background-color 200ms ease;
    &:hover {
      background-color: ${theme.pallets.primary[600].string()};
    }
    &:active {
      background-color: ${theme.pallets.primary[700].string()};
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px ${theme.pallets.primary[500].alpha(0.3).string()};
    }
  `}
`;

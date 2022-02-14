import styled, { css } from 'styled-components';

export const Button = styled.button<{ isActive: boolean }>`
  ${({ theme, isActive }) => {
    const pallet = isActive ? theme.pallets.primary : theme.pallets.inactive;
    return css`
      display: flex;
      gap: ${theme.spacing(2)};
      align-items: center;
      padding: ${theme.spacing(3)};
      border-radius: 10px;
      border: 2px solid ${pallet[400].string()};
      transition: background-color 200ms ease;
      background-color: ${pallet[100].string()};
      ${!isActive &&
      css`
        &:hover {
          background-color: ${pallet[200].string()};
        }
        &:active {
          background-color: ${pallet[300].string()};
        }
      `}
    `;
  }}
`;

export const Kbd = styled.kbd<{ isActive: boolean }>`
  ${({ theme, isActive }) => {
    const pallet = isActive ? theme.pallets.primary : theme.pallets.inactive;
    return css`
      color: ${pallet[400].string()};
      font-family: inherit;
      font-weight: 600;
      padding: 0 ${theme.spacing(1)};
      border: 2px solid ${pallet[400].string()};
      border-radius: 5px;
      min-width: 1.5em;
      text-align: center;
      font-size: 16px;
    `;
  }}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.pallets.text[300].string()};
    font-size: 20px;
  `}
`;

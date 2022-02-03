import { SchemaName } from 'src/types/Schema.type';
import styled, { css } from 'styled-components';

export const InputBlock = styled.label`
  margin-top: 8px;
  position: relative;
  display: flex;
`;

export const Label = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    left: ${theme.spacing(4)};
    font-size: 16px;
    font-weight: 500;
    user-select: none;
    background-color: ${theme.pallets.inactive[50].string()};
    color: ${theme.pallets.primary[700].string()};
    font-weight: 600;
    padding: 0 ${theme.spacing(1)};
    transition: all 100ms ease;
  `}
`;

export const Input = styled.input.attrs({
  type: 'text',
})<{
  schema: SchemaName.ERROR | SchemaName.PRIMARY;
}>`
  ${({ theme, schema }) => {
    const pallet = theme.pallets[schema];
    return css`
      padding: ${theme.spacing(3.5)} ${theme.spacing(5)};
      background-color: ${theme.pallets.inactive[50].string()};
      border-radius: 10px;
      width: 0;
      flex: 1;
      font-size: 18px;
      border: 2px solid ${pallet[200].string()};
      font-weight: 500;
      outline: none;
      transition: box-shadow 100ms ease, border-color 100ms ease;
      border-color: ${pallet[200].string()};
      color: ${pallet[900].string()};
      &::placeholder {
        color: transparent;
      }
      &:focus-visible {
        box-shadow: 0 0 0 3px ${pallet[500].alpha(0.2).toString()};
        border-color: ${pallet[500].string()};
      }
      & + ${Label} {
        color: ${pallet[700].string()};
      }
      &:placeholder-shown:not(:focus) + ${Label} {
        top: 50%;
        font-size: 18px;
        left: ${theme.spacing(5.5)};
        font-weight: 500;
        padding: 0;
        color: ${theme.pallets.text[500].string()};
      }
    `;
  }}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing(2)};
    font-weight: 500;
    font-size: 17px;
    color: ${theme.pallets.error[600].string()};
  `}
`;

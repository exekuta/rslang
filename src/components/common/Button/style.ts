/* eslint-disable indent */
import { IMDPallet, SchemaNameValue } from 'src/types/Schema.type';
import styled, { css } from 'styled-components';
import { Size, Variant } from './types';

export const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25em;
  & > svg {
    font-size: 1.2em;
  }
`;
export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

export const Button = styled.button<{
  size: Size;
  variant: Variant;
  schema: SchemaNameValue;
  fullWidth: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  minWidth?: number;
  maxWidth?: number;
}>`
  ${({
    theme,
    size,
    variant,
    schema,
    fullWidth,
    isLoading,
    isDisabled,
    minWidth,
    maxWidth,
  }) => {
    const pallet = isDisabled
      ? theme.pallets.inactive
      : (theme.pallets[schema] as IMDPallet);

    return css`
      font-weight: 600;
      border-radius: 10px;
      transition: background-color 100ms ease;
      outline: none;
      width: ${fullWidth ? '100%' : 'max-content'};
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: max-content;

      ${minWidth &&
      css`
        min-width: min(${minWidth}px, 100%);
      `}

      ${maxWidth &&
      css`
        max-width: ${maxWidth}px;
      `}

      ${size === 'large'
        ? css`
            padding: ${theme.spacing(4)} ${theme.spacing(10)};
            font-size: 22px;
          `
        : size === 'medium'
        ? css`
            padding: ${theme.spacing(3)} ${theme.spacing(6)};
            font-size: 18px;
          `
        : css`
            padding: ${theme.spacing(2)} ${theme.spacing(4)};
            font-size: 16px;
          `}
      ${variant === 'contained'
        ? css`
            background-color: ${pallet[500].string()};
            color: ${theme.pallets.text[1000].string()};
            &:not(:disabled) {
              &:hover {
                background-color: ${pallet[600].string()};
              }
              &:active {
                background-color: ${pallet[700].string()};
              }
              &:focus-visible {
                box-shadow: 0 0 0 2px ${pallet[600].string()} inset,
                  0 0 0 3px ${pallet[500].alpha(0.25).string()};
              }
            }
          `
        : css`
            background-color: ${pallet[500].alpha(0.1).string()};
            outline: 2px solid ${pallet[500].string()};
            outline-offset: -2px;
            color: ${pallet[700].string()};
            &:not(:disabled) {
              &:hover {
                background-color: ${pallet[500].alpha(0.25).string()};
              }
              &:active {
                background-color: ${pallet[500].alpha(0.35).string()};
              }
              &:focus-visible {
                box-shadow: 0 0 0 3px ${pallet[500].alpha(0.25).string()};
              }
            }
          `}

      ${isLoading &&
      css`
        ${Text} {
          color: transparent;
        }
        ${Loader} {
          display: block;
        }
      `}
    `;
  }}
`;

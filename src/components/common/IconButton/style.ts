import { DictionaryName } from 'src/types/Dictionary.type';
import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(0.5);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

export const Button = styled.button<{
  isDisabled: boolean;
  isLoading: boolean;
  dictionaryName?: DictionaryName;
}>`
  ${({
    theme, isLoading, isDisabled, dictionaryName,
  }) => {
    const pallet = typeof dictionaryName === 'undefined'
      ? theme.pallets.inactive
      : theme.pallets.dictionaries[dictionaryName];

    return css`
      font-size: 24px;
      height: 1.5em;
      width: 1.5em;
      display: grid;
      place-items: center;
      background-color: transparent;
      color: ${pallet[500].string()};
      position: relative;
      ${isDisabled &&
      css`
        color: ${theme.pallets.inactive[700].string()};
      `}
      &::before {
        content: '';
        position: absolute;
        inset: ${theme.spacing(-1)};
        border-radius: 50%;
        transition: opacity 200ms ease;
        background-color: currentColor;
        opacity: 0;
        ${isLoading &&
        css`
          animation: ${pulse} 800ms infinite;
        `}
      }
      &:disabled {
        cursor: default;
      }
      &:not(:disabled) {
        &:hover::before {
          opacity: 0.15;
        }
        &:active::before {
          opacity: 0.3;
        }
      }
    `;
  }}
`;

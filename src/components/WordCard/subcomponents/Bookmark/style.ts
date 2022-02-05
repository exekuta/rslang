import { DictionaryName } from 'src/types/Dictionary.type';
import styled, { css } from 'styled-components';

export const Bookmark = styled.button<{
  isActive: boolean;
  dictionaryName: DictionaryName;
}>`
  ${({ theme, isActive, dictionaryName }) => {
    const pallet = theme.pallets.dictionaries[dictionaryName];
    return css`
      position: absolute;
      top: 0;
      right: 25px;
      height: 30px;
      width: 20px;
      clip-path: polygon(100% 0, 100% 100%, 50% 75%, 0 100%, 0 0);
      background-color: ${theme.pallets.inactive[300].string()};
      transition: filter 100ms ease;
      &:hover {
        filter: brightness(0.9);
      }
      &:active {
        filter: brightness(0.8);
      }
      ${isActive &&
      css`
        background-color: ${pallet[300].string()};
      `}
    `;
  }}
`;

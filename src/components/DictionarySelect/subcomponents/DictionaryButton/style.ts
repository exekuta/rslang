/* eslint-disable indent */
import { AdditionalGroupName, GroupName } from 'src/types/Dictionary.type';
import styled, { css } from 'styled-components';
import gradient from 'src/assets/img/gradient.png';

export const Button = styled.button<{
  isSelected: boolean;
  groupName: GroupName;
  onClick: () => void;
}>`
  ${({ theme, groupName, isSelected }) => {
    const pallet =
      groupName === AdditionalGroupName.DIFFICULT_WORDS
        ? false
        : theme.pallets.dictionaries[groupName];
    return css`
      height: 55px;
      width: 55px;
      box-shadow: 0 0 0 2px inset ${theme.pallets.inactive[200].string()};
      border-radius: 50%;
      ${pallet
        ? css`
            color: ${pallet[500].string()};
          `
        : css`
            color: black;
          `}
      background-color: white;
      display: grid;
      place-items: center;
      font-size: 24px;
      transition: background-color 200ms ease, border-radius 100ms ease;
      ${isSelected &&
      css`
        color: white;
        ${pallet
          ? css`
              background-color: ${pallet[500].string()};
            `
          : css`
              background-image: url(${gradient});
              background-size: cover;
              color: white;
            `}
        border-radius: 15px;
        box-shadow: none;
      `}
    `;
  }}
`;

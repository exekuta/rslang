/* eslint-disable indent */
import Color from 'color';
import {
  AdditionalGroupName,
  GroupName,
  isDictionaryNameValue,
} from 'src/types/Dictionary.type';
import { IMDPallet } from 'src/types/Schema.type';
import styled, { css } from 'styled-components';

const gradient = css`
  linear-gradient(
    45deg,
    hsl(240, 100%, 30%) 0%,
    hsl(289, 100%, 31%) 11%,
    hsl(315, 100%, 37%) 22%,
    hsl(329, 100%, 46%) 33%,
    hsl(337, 100%, 53%) 44%,
    hsl(357, 91%, 69%) 56%,
    hsl(17, 100%, 69%) 67%,
    hsl(34, 100%, 63%) 78%,
    hsl(45, 100%, 60%) 89%,
    hsl(55, 100%, 60%) 100%
  );
`;

export const Button = styled.button<{
  isActive: boolean;
  groupName: GroupName;
}>`
  ${({ theme, groupName, isActive }) => {
    const pallet =
      groupName === AdditionalGroupName.DIFFICULT_WORDS
        ? false
        : (theme.pallets.dictionaries[groupName] as IMDPallet);

    return css`
      height: 60px;
      width: 60px;
      flex: 0 0 auto;
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
      font-size: 26px;
      transition: background-color 200ms ease, border-radius 100ms ease;
      ${!isActive &&
      (pallet
        ? css`
            background-color: ${Color('white').mix(pallet[500], 0.2).string()};
            &:not(:disabled) {
              &:hover {
                background-color: ${Color('white')
                  .mix(pallet[500], 0.4)
                  .string()};
              }
              &:active {
                background-color: ${Color('white')
                  .mix(pallet[500], 0.5)
                  .string()};
              }
              &:focus-visible {
                outline: 2px solid ${pallet[500].string()};
                outline-offset: 2px;
              }
            }
          `
        : css`
            background-image: ${gradient};
            color: white;
            opacity: 0.5;
          `)}
      ${isActive &&
      css`
        ${pallet
          ? css`
              background-color: ${pallet[500].string()};
            `
          : css`
              background-image: ${gradient};
              background-size: cover;
              color: white;
            `}
        ${isDictionaryNameValue(groupName) &&
        css`
          border-radius: 15px;
        `}
        color: white;
        box-shadow: none;
      `}
    `;
  }}
`;

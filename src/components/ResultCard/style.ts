import { IMDPallet, SchemaName } from 'src/types/Schema.type';
import styled, { css } from 'styled-components';

export const StatementTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const StatementValue = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Score = styled.p`
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Statement = styled.p``;

export const AudioButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 24px;
  color: white;
  transition: background-color 200ms ease;
  outline: none;
`;

export const Title = styled.p`
  font-size: 19px;
  font-weight: 700;
`;

export const Wrapper = styled.div<{
  isGuessed: boolean;
}>`
  ${({ theme, isGuessed }) => {
    const palletName: SchemaName = isGuessed
      ? SchemaName.SUCCESS
      : SchemaName.ERROR;

    const pallet = theme.pallets[palletName] as IMDPallet;

    return css`
      padding: ${theme.spacing(3)};
      border-radius: 10px;
      background-color: ${pallet[100].string()};
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      *::selection {
        background-color: ${pallet[400].string()};
        color: ${theme.pallets.text[1000].string()};
      }

      ${StatementTitle} {
        color: ${pallet[700].string()};
      }

      ${StatementValue},
      ${Score} {
        color: ${pallet[600].string()};
      }

      ${AudioButton} {
        background-color: ${pallet[400].string()};
        &:hover {
          background-color: ${pallet[500].string()};
        }
        &:active {
          background-color: ${pallet[600].string()};
        }
        &:focus-visible {
          box-shadow: 0 0 0 3px ${pallet[500].alpha(0.4).string()},
            0 0 0 1px ${pallet[600].string()} inset;
        }
      }

      ${Title} {
        color: ${pallet[900].string()};
      }
    `;
  }}
`;

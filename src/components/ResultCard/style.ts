import { SchemaName } from 'src/types/Schema.type';
import styled, { css } from 'styled-components';

export const StatementTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
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

export const Wrapper = styled.div<{
  isGuessed: boolean;
}>`
  ${({ theme, isGuessed }) => {
    const palletName: SchemaName = isGuessed
      ? SchemaName.SUCCESS
      : SchemaName.ERROR;

    const pallet = theme.pallets[palletName];

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
    `;
  }}
`;

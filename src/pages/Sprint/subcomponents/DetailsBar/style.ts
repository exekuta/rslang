import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacing(2)};
  `}
`;

export const Tick = styled.div<{
  isChecked: boolean;
}>`
  ${({ theme, isChecked }) => css`
    height: 30px;
    width: 30px;
    font-size: 22px;
    border-radius: 50%;
    color: white;
    display: grid;
    place-items: center;
    background-color: ${theme.pallets.primary[isChecked ? 500 : 100].string()};
  `}
`;

export const Score = styled.span`
  ${({ theme }) => css`
    min-width: 4ch;
    text-align: left;
    font-size: 32px;
    color: ${theme.pallets.primary[500].string()};
    font-weight: 700;
  `}
`;

export const Multiplier = styled.span`
  ${({ theme }) => css`
    min-width: 4ch;
    text-align: right;
    font-size: 32px;
    color: ${theme.pallets.text[400].string()};
    font-weight: 700;
  `}
`;

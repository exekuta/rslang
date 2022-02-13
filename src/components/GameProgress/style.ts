import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)};
  `}
`;

export const Progress = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 15px;
    width: 100%;
    flex: 1;
    border-radius: 10px;
    background-color: ${theme.pallets.inactive[300].string()};
    overflow: hidden;
  `}
`;

export const ProgressInner = styled.div<{
  progress: number,
}>`
  ${({ theme, progress }) => css`
    position: absolute;
    width: ${progress * 100}%;
    inset: 0 auto 0 0;
    border-radius: inherit;
    background-color: ${theme.pallets.primary[300].string()};
  `}
`;

export const Details = styled.p`
  ${({ theme }) => css`
    color: ${theme.pallets.inactive[400].string()};
    font-size: 18px;
    font-weight: 700;
  `}
`;

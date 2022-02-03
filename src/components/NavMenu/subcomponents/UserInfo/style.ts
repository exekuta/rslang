import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-top: 2px solid ${theme.pallets.inactive[100].string()};
    padding: ${theme.spacing(4)} ${theme.spacing(3)};
    display: flex;
    gap: ${theme.spacing(2)};
    align-items: center;
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    width: 50px;
    border-radius: 10px;
    background-color: ${theme.pallets.primary[200].string()};
    color: ${theme.pallets.text[1000].string()};
    display: grid;
    place-items: center;
    user-select: none;
    font-weight: 600;
    font-size: 20px;
  `}
`;

export const Info = styled.div`
  flex: 1;
  width: 0;
  cursor: default;
`;

export const Name = styled.p`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.pallets.text[300].string()};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export const Email = styled.p`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 16px;
    color: ${theme.pallets.text[500].string()};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

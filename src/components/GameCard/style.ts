import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacing(6)};
    outline: 2px solid ${theme.pallets.primary[500].string()};
    outline-offset: -2px;
    background-color: ${theme.pallets.primary[500].alpha(0.05).string()};
    border-radius: 10px;
    display: grid;
    gap: ${theme.spacing(4)};
    justify-items: center;
    transition: background-color 100ms ease;
    &:hover {
      background-color: ${theme.pallets.primary[500].alpha(0.1).string()};
    }
    &:active {
      background-color: ${theme.pallets.primary[500].alpha(0.2).string()};
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px ${theme.pallets.primary[500].alpha(0.2).string()};
    }
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.pallets.primary[800].string()};
    font-size: 24px;
    font-weight: 600;
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 220px;
    padding-bottom: 100%;
    position: relative;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
  `}
`;

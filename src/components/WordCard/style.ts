import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing(1)};
    border-radius: 15px;
    display: flex;
    gap: ${theme.spacing(1)};
    background-color: ${theme.pallets.inactive[50].string()};
    border: 2px solid ${theme.pallets.inactive[200].string()};
    position: relative;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  `}
`;

export const Image = styled.img`
  object-fit: cover;
  width: 170px;
  border-radius: 10px 0 0 10px;
  @media (max-width: 800px) {
    height: 170px;
    width: unset;
    border-radius: 10px 10px 0 0;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing(2)};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
  `}
`;

export const Word = styled.p`
  ${({ theme }) => css`
    font-size: 24px;
    font-weight: 700;
    display: inline-flex;
    gap: ${theme.spacing(1)};
    align-items: baseline;
    color: ${theme.pallets.text[200].string()};
  `}
`;

export const Transcription = styled.span`
  ${({ theme }) => css`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.pallets.text[500].string()};
  `}
`;

export const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(4)};
  `}
`;

export const Translation = styled.p`
  ${({ theme }) => css`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.pallets.text[300].string()};
  `}
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    height: 2px;
    background-color: ${theme.pallets.inactive[200].string()};
    border-radius: 2px;
    width: 100%;
    max-width: 130px;
  `}
`;

export const Examples = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
  `}
`;

import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(4)};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 700px;
    width: 100%;
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: 600;
    color: ${theme.pallets.error[700].string()};
  `}
`;

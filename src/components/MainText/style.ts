import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 80%;
  font-size: 48px;
  color: ${theme.pallets.text[1000].string()};
  text-align: center;
  margin-left: 100px;
  `};
`;

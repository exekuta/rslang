import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 77%;
  font-size: 48px;
  color: ${theme.pallets.text[1000].string()};
  text-align: center;
  margin-left: 100px;
  margin-top: 30px;
  `};
`;

export const Features = styled.span<{
  showFeature: boolean;
}>`
  font-size: 32px;
  text-align: left;
  opacity: ${({ showFeature }) => (showFeature ? '0' : '1')};
  transition: all 0.4s ease-out;
`;

export const List = styled.ul`
  list-style: none;
`;

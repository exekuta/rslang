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
  margin-left: 100px;
  margin-top: 30px;
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 1000px) {
    font-size: 28px;
  }
  @media (max-width: 900px) {
    margin-left: 50px;
  }
  @media (max-width: 800px) {
    height: 72%;
  }
  @media (max-width: 550px) {
    font-size: 22px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
  }
  `};
`;

export const Features = styled.span<{
  showFeature: boolean;
}>`
  font-size: 32px;
  text-align: left;
  /* opacity: ${({ showFeature }) => (showFeature ? '1' : '1')}; */
  transition: all 0.4s ease-out;
  @media (max-width: 1200px) {
    font-size: 28px;
  }
  @media (max-width: 1000px) {
    font-size: 24px;
  }
`;

export const Strong = styled.strong`
  display: block;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const VideoContainer = styled.iframe`
  margin-top: 60px;
  width: 90%;
  height: 35vh;
  position: absolute;
  top: 0;
  left: 0;
`;

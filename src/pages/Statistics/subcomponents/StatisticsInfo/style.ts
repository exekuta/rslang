import { crocodileImg, giraffeImg } from 'src/assets/img';
import styled, { css } from 'styled-components';

export const AudioStatContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  width: 50vw;
  height: 22vh;
  padding: 10px;
  &::before{
    content: "";
    background-image: url(${giraffeImg});
    background-repeat: no-repeat;
    background-position: right top 20px;
    background-size: 40%;
    position: absolute;
    inset: 0;
    opacity: 0.4;
  }
`;

export const SprintStatContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  width: 50vw;
  height: 22vh;
  padding: 10px;
  &::before{
    content: "";
    background-image: url(${crocodileImg});
    background-repeat: no-repeat;
    background-position: right top 20px;
    background-size: 40%;
    position: absolute;
    inset: 0;
    opacity: 0.4;
  }
`;

export const WordsStatContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 10px;
`;

export const Text = styled.h2`
  ${({ theme }) => css`
    color: ${theme.pallets.text[400].string()};
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  `}
`;

export const Date = styled.h2`
  ${({ theme }) => css`
    color: ${theme.pallets.text[600].string()};
    font-weight: 500;
    font-size: 19px;
    text-align: center;
  `}
`;

export const StatDataContainer = styled.div`
  display: flex;
  border-radius: 20px;
`;

export const StatData = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.pallets.inactive[100].string()};
    border-radius: 20px;
    width: 20%;
    padding: 10px;
    gap: 10px;
  `}
`;

export const StatDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 10px;
    gap: 10px;
  `}
`;

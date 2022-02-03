/* eslint-disable indent */
import { SchemaNameValue } from 'src/types/Schema.type';
import styled, { css, keyframes } from 'styled-components';

const factor = 0.03;

const circle1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const circle2 = keyframes`
  100% {
    transform: translate(${24 * factor}em, 0);
  }
`;
const circle3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Loader = styled.div<{
  size?: number;
  schema: SchemaNameValue;
  isText: boolean;
}>`,
  ${({
 theme, schema, isText, size,
}) => css`
    display: inline-block;
    position: relative;
    ${size
    && css`
      font-size: ${size * 5}px;
    `}
    width: ${80 * factor}em;
    height: ${80 * factor}em;
    div {
      position: absolute;
      top: ${33 * factor}em;
      width: ${13 * factor}em;
      height: ${13 * factor}em;
      border-radius: 50%;
      background-color: ${isText
        ? 'currentColor'
        : theme.pallets[schema][400].string()};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    div:nth-child(1) {
      left: ${8 * factor}em;
      animation: ${circle1} 0.6s infinite;
    }
    div:nth-child(2) {
      left: ${8 * factor}em;
      animation: ${circle2} 0.6s infinite;
    }
    div:nth-child(3) {
      left: ${32 * factor}em;
      animation: ${circle2} 0.6s infinite;
    }
    div:nth-child(4) {
      left: ${56 * factor}em;
      animation: ${circle3} 0.6s infinite;
    }
  `}
`;

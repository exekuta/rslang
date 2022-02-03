/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

export const Flex = styled.div<{
  gap?: number;
  rgap?: number;
  cgap?: number;
  aic?: boolean;
  ais?: boolean;
  aie?: boolean;
  jcc?: boolean;
  jcs?: boolean;
  jce?: boolean;
  column?: boolean;
  wrap?: boolean;
}>`
  ${({ theme, ...props }) => css`
    display: flex;
    ${props.gap
    && css`
      gap: ${theme.spacing(props.gap)};
    `}
    ${props.rgap
    && css`
      row-gap: ${theme.spacing(props.rgap)};
    `}
    ${props.cgap
    && css`
      column-gap: ${theme.spacing(props.cgap)};
    `}
    ${(props.aic || props.ais || props.aie)
    && css`
      align-items: ${props.aic ? 'center' : props.aic ? 'start' : 'end'};
    `}
    ${(props.jcc || props.jcs || props.jce)
    && css`
      justify-content: ${props.jcc ? 'center' : props.jcs ? 'start' : 'end'};
    `}
    ${props.column
    && css`
      flex-direction: column;
    `}
    ${props.wrap
    && css`
      flex-direction: wrap;
    `}
  `}
`;

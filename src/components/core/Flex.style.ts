/* eslint-disable indent */
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
  jcsb?: boolean;
  jce?: boolean;
  pic?: boolean;
  column?: boolean;
  fwrap?: boolean;
}>`
  ${({ theme, ...props }) => css`
    display: flex;
    ${props.gap &&
    css`
      gap: ${theme.spacing(props.gap)};
    `}
    ${props.rgap &&
    css`
      row-gap: ${theme.spacing(props.rgap)};
    `}
    ${props.cgap &&
    css`
      column-gap: ${theme.spacing(props.cgap)};
    `}
    ${(props.aic || props.ais || props.aie) &&
    css`
      align-items: ${props.aic ? 'center' : props.aic ? 'start' : 'end'};
    `}
    ${(props.jcc || props.jcs || props.jce || props.jcsb) &&
    css`
      justify-content: ${props.jcc
        ? 'center'
        : props.jcs
        ? 'start'
        : props.jce
        ? 'end'
        : 'space-between'};
    `}
    ${props.pic &&
    css`
      place-items: center;
    `}
    ${props.column &&
    css`
      flex-direction: column;
    `}
    ${props.fwrap &&
    css`
      flex-wrap: wrap;
    `}
  `}
`;

import { Container as Footer } from 'src/components/Footer/style';
import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template: 1fr / auto 1fr;
  height: 100vh;
`;

export const Container = styled.main`
  overflow: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  > ${Footer} {
    margin-top: auto;
  }
`;

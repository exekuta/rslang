import 'styled-components';
import { theme } from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallets: typeof theme.pallets;
    spacing: typeof theme.spacing;
  }
}

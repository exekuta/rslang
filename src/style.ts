import { createGlobalStyle, css } from 'styled-components';
import './assets/fonts';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      font-size: 18px;
      font-weight: 500;
    }

    #root {
      display: contents;
    }

    body {
      min-height: 100vh;
      font-family: 'Gilroy', sans-serif;
      background-color: ${theme.pallets.inactive[100].string()};
      color: ${theme.pallets.text[100].string()};
    }

    img {
      user-drag: none;
      user-select: none;
    }

    a {
      text-decoration: none;
      color: ${theme.pallets.primary[500].string()};
    }

    input,
    button {
      font: inherit;
      color: inherit;
      border: none;
    }

    button {
      cursor: pointer;
    }
  `}
`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    cursor: default;
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: none;
  }

  html {
    font-size: 1.125rem;
  }

  body, button, input, text-area {
    color: ${(props) => props.theme['neutral-900']};
    font-family: ${(props) => props.theme['font-sans']};
    font-size: 1rem;
    font-weight: 400;
  }
`;

export { GlobalStyle };

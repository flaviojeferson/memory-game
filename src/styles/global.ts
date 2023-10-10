import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: default;
  }

  :focus {
    outline: none;
  }

  html {
    font-size: 1.125rem;
  }

  body, button, input, text-area {
    font-size: 1rem;
    font-weight: 400;
    font-family: ${(props) => props.theme['font-sans']};
    color: ${(props) => props.theme['neutral-900']};
  }
`;

export { GlobalStyle };

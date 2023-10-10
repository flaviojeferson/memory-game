import { styled } from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme['neutral-100']};
`;

export { AppContainer };

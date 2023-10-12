import { styled } from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme['neutral-100']};
`;

export { AppContainer };

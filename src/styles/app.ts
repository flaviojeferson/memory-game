import { styled } from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme['neutral-100']};

  @media screen and (max-width: 60rem) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;

    .memory-game__status {
      max-width: 500px;
      width: 100%;
    }
  }

  @media screen and (max-width: 34rem) {
    padding: 1rem 0.5rem;

    .memory-game__table {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }
`;

export { AppContainer };

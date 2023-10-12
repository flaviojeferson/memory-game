import styled from 'styled-components';

const GameStatusContainer = styled.main`
  padding: 1rem;
  max-width: 400px;
  .game-status__title {
    line-height: 200%;
  }

  .game-status__wrapper {
    margin-block: 1rem;

    .game-status__label {
      color: #4b5563;
    }
    .game-status__value {
      font-weight: 700;
      font-size: 2rem;
    }
  }

  .game-status__button {
    align-items: center;
    background-color: ${(props) => props.theme['blue-700']};
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme['blue-700']};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    display: flex;
    font-weight: 500;
    gap: 0.75rem;
    justify-content: center;
    padding-block: 0.75rem;
    text-transform: uppercase;
    transition: background-color 200ms;
    width: 100%;

    &:hover {
      background-color: ${(props) => props.theme['blue-900']};
    }
  }
`;

export { GameStatusContainer };

import { styled } from 'styled-components';

const GameCardContainer = styled.div`
  background-color: #a1a1aa;
  border-radius: 0.75rem;
  cursor: pointer;
  display: grid;
  height: 6rem;
  place-items: center;
  width: 6rem;

  &.card__visible {
    background-color: ${(props) => props.theme['blue-700']};

    .card__icon {
      opacity: 1;
    }
  }

  .card__icon {
    width: 60%;
    height: 60%;
    opacity: 0.8;
    pointer-events: none;
    user-select: none;
  }
`;

export { GameCardContainer };

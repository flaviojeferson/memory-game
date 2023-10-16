import { useReducer } from 'react';
import {
  MemoryGameActions,
  MemoryGameReducer,
  MemoryGameState,
} from '../@types/MemoryGame';
import { shuffleCards } from '../helpers/shuffleCards';

const memoryGameInitalState: MemoryGameState = {
  cards: shuffleCards(),
  isGaming: false,
  isChecking: false,
  moviments: 0,
};

const memoryGameReducer = (
  prevState: MemoryGameState,
  action: MemoryGameActions,
) => {
  switch (action.type) {
    case 'SET_GAME_STATE':
      return action.payload;
    case 'TOGGLE_GAME_STATE': {
      return {
        cards: shuffleCards(),
        isGaming: !prevState.isGaming,
        isChecking: false,
        moviments: 0,
      } satisfies MemoryGameState;
    }
  }
};

function useMemoryGame(): MemoryGameReducer {
  const [gameState, gameStateDispatch] = useReducer(
    memoryGameReducer,
    memoryGameInitalState,
  );
  return { gameState, gameStateDispatch };
}

export { useMemoryGame, memoryGameInitalState };

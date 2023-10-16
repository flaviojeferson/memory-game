type SetGameStateAction = {
  type: 'SET_GAME_STATE';
  payload: MemoryGameState;
};

type ToggleGameStateAction = {
  type: 'TOGGLE_GAME_STATE';
};

type MemoryGameActions = SetGameStateAction | ToggleGameStateAction;

type MemoryGameCard = {
  iconSrc: string;
  id: string;
  isFlipped: boolean;
  isMatched: boolean;
};

type MemoryGameReducer = {
  gameState: MemoryGameState;
  gameStateDispatch: React.Dispatch<MemoryGameActions>;
};

type MemoryGameState = {
  cards: MemoryGameCard[];
  isGaming: boolean;
  isChecking: boolean;
  moviments: number;
};

export type {
  MemoryGameCard,
  MemoryGameState,
  MemoryGameActions,
  MemoryGameReducer,
};

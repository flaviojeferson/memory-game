import { MemoryGameReducer, MemoryGameState } from '../@types/MemoryGame';
import { checkCards } from './checkCards';

function flipCardById(
  { gameState, gameStateDispatch }: MemoryGameReducer,
  cardId: string,
) {
  const { cards, isChecking, isGaming, moviments } = gameState;
  if (!isGaming || isChecking) {
    console.error('Não foi possivel virar a carta com o id: ' + cardId);
    return;
  }

  const flippedCard = cards.find((card) => card.id === cardId);

  if (!flippedCard || flippedCard.isFlipped) return;

  flippedCard.isFlipped = true;

  const newGameState: MemoryGameState = {
    ...gameState,
    moviments: moviments + 1,
  };

  gameStateDispatch({
    type: 'SET_GAME_STATE',
    payload: newGameState,
  });

  checkCards({ gameState, gameStateDispatch });
}

export { flipCardById };

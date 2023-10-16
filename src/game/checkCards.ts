import { MemoryGameCard, MemoryGameReducer } from '../@types/MemoryGame';
import { checkWin } from './checkWin';
function checkCards({ gameState, gameStateDispatch }: MemoryGameReducer) {
  const flippedCards = getFlippedCards(gameState.cards);

  if (flippedCards.length !== 2) return;

  const [firstCard, secondCard] = flippedCards;

  const isMatched = firstCard.iconSrc === secondCard.iconSrc;

  setCheckingState(true);

  if (isMatched) {
    markCardsAsMatched(firstCard, secondCard);
    setCheckingState(false);
    checkWin({ gameState, gameStateDispatch });
  } else {
    unflipCardsAfterDelay(firstCard, secondCard);
  }

  function getFlippedCards(cards: MemoryGameCard[]) {
    return cards.filter((card) => card.isFlipped && !card.isMatched);
  }

  function setCheckingState(isChecking: boolean) {
    gameStateDispatch({
      type: 'SET_GAME_STATE',
      payload: {
        ...gameState,
        isChecking,
      },
    });
  }

  function markCardsAsMatched(
    firstCard: MemoryGameCard,
    secondCard: MemoryGameCard,
  ) {
    firstCard.isMatched = true;
    secondCard.isMatched = true;
  }

  function unflipCardsAfterDelay(
    firstCard: MemoryGameCard,
    secondCard: MemoryGameCard,
  ) {
    setTimeout(() => {
      firstCard.isFlipped = false;
      secondCard.isFlipped = false;
      setCheckingState(false);
    }, 500);
  }
}

export { checkCards };

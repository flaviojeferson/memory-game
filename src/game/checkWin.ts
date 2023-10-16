import { MemoryGameCard, MemoryGameReducer } from '../@types/MemoryGame';

function checkWin({ gameState, gameStateDispatch }: MemoryGameReducer) {
  const matchedCards = getMatchedCards(gameState.cards);

  const isWin = matchedCards.length === gameState.cards.length;

  if (isWin) {
    alert(
      `Você achou todas as combinações do jogo.\nO jogo atual será reiniciado!`,
    );
    setTimeout(() => {
      resetGame();
    }, 1000);
  }

  function getMatchedCards(cards: MemoryGameCard[]) {
    return cards.filter((card) => card.isMatched);
  }

  function resetGame() {
    gameStateDispatch({
      type: 'TOGGLE_GAME_STATE',
    });
  }
}

export { checkWin };

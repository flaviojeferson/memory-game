import { formatElapsedTime } from '../../utils/formatElapsedTime.ts';
import { GameStatusContainer } from './styles.ts';
import { useContext } from 'react';
import { useTimer } from '../../hooks/useTimer.ts';
import playArrowSvgSrc from '../../assets/play_arrow.svg';
import replaySvgSrc from '../../assets/replay.svg';
import { MemoryGameContext } from '../../contexts/MemoryGameContext.tsx';

const GAME_STARTED = {
  buttonText: 'Parar jogo atual',
  buttonIcon: replaySvgSrc,
};

const GAME_NOT_STARTED = {
  buttonText: 'Iniciar novo jogo',
  buttonIcon: playArrowSvgSrc,
};

const GameStatus: React.FC = () => {
  const { gameState, gameStateDispatch } = useContext(MemoryGameContext)!;
  const { elapsedTime } = useTimer(gameState.isGaming);

  const gameStatus = gameState.isGaming ? GAME_STARTED : GAME_NOT_STARTED;
  return (
    <GameStatusContainer>
      <h1 className="game-status__title">Jogo da memória</h1>

      <div className="game-status__wrapper">
        <p className="game-status__label">Tempo</p>
        <p className="game-status__value">{formatElapsedTime(elapsedTime)}</p>
      </div>

      <div className="game-status__wrapper">
        <p className="game-status__label">Movimentos</p>
        <p className="game-status__value">{gameState.moviments}</p>
      </div>

      <button
        className="game-status__button"
        type="button"
        onClick={() => gameStateDispatch({ type: 'TOGGLE_GAME_STATE' })}
      >
        <img src={gameStatus.buttonIcon} alt="" />
        {gameStatus.buttonText}
      </button>
    </GameStatusContainer>
  );
};

export { GameStatus };

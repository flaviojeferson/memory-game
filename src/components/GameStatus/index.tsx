import { formatElapsedTime } from '../../utils/formatElapsedTime.ts';
import { GameStatusContainer } from './styles.ts';
import { useState } from 'react';
import { useTimer } from '../../hooks/useTimer.ts';
import playArrowSvgSrc from '../../assets/play_arrow.svg';
import replaySvgSrc from '../../assets/replay.svg';

const GAME_STARTED = {
  buttonText: 'Reiniciar jogo',
  buttonIcon: replaySvgSrc,
};

const GAME_NOT_STARTED = {
  buttonText: 'Iniciar novo jogo',
  buttonIcon: playArrowSvgSrc,
};

const GameStatus: React.FC = () => {
  const [wasStarted, setWasStarted] = useState(false);
  const { elapsedTime } = useTimer(wasStarted);

  const handleToggleWasStarted = () => setWasStarted(!wasStarted);

  const gameStatus = wasStarted ? GAME_STARTED : GAME_NOT_STARTED;
  return (
    <GameStatusContainer>
      <h1 className="game-status__title">Jogo da memória</h1>

      <div className="game-status__wrapper">
        <p className="game-status__label">Tempo</p>
        <p className="game-status__value">{formatElapsedTime(elapsedTime)}</p>
      </div>

      <div className="game-status__wrapper">
        <p className="game-status__label">Movimentos</p>
        <p className="game-status__value">0</p>
      </div>

      <button
        className="game-status__button"
        type="button"
        onClick={handleToggleWasStarted}
      >
        <img src={gameStatus.buttonIcon} alt="" />
        {gameStatus.buttonText}
      </button>
    </GameStatusContainer>
  );
};

export { GameStatus };

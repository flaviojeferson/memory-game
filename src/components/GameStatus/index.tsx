import { GameStatusContainer } from './styles.ts';

const GameStatus: React.FC = () => {
  return (
    <GameStatusContainer>
      <h1 className="game-status__title">Jogo da memória</h1>

      <div className="game-status__wrapper">
        <p className="game-status__label">Tempo</p>
        <p className="game-status__value">00:00</p>
      </div>

      <div className="game-status__wrapper">
        <p className="game-status__label">Movimentos</p>
        <p className="game-status__value">0</p>
      </div>

      <button className="game-status__button" type="button">
        Iniciar novo jogo
      </button>
    </GameStatusContainer>
  );
};

export { GameStatus };

import { useContext } from 'react';
import { GameCard } from './GameCard/index.tsx';
import { GameTableContainer } from './styles.ts';
import { MemoryGameContext } from '../../contexts/MemoryGameContext.tsx';

const GameTable: React.FC = () => {
  const { gameState } = useContext(MemoryGameContext)!;
  const { cards } = gameState;

  return (
    <GameTableContainer>
      {cards.map((card) => {
        return <GameCard card={card} key={card.id} />;
      })}
    </GameTableContainer>
  );
};

export { GameTable };

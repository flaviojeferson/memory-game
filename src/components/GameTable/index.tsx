import React, { useContext } from 'react';
import { GameCard } from './GameCard/index.tsx';
import { GameTableContainer } from './styles.ts';
import { MemoryGameContext } from '../../contexts/MemoryGameContext.tsx';

interface GameTableProps extends React.HTMLAttributes<HTMLDivElement> {}

const GameTable: React.FC<GameTableProps> = ({ ...props }) => {
  const { gameState } = useContext(MemoryGameContext)!;
  const { cards } = gameState;

  return (
    <GameTableContainer {...props}>
      {cards.map((card) => {
        return <GameCard card={card} key={card.id} />;
      })}
    </GameTableContainer>
  );
};

export { GameTable };

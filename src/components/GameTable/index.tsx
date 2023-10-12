import { GameCard } from './GameCard/index.tsx';
import { GameTableContainer } from './styles.ts';

const GameTable: React.FC = () => {
  return (
    <GameTableContainer>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </GameTableContainer>
  );
};

export { GameTable };

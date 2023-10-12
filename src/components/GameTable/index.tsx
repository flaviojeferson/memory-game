import { shuffleCards } from '../../helpers/shuffleCards.ts';
import { GameCard } from './GameCard/index.tsx';
import { GameTableContainer } from './styles.ts';

const GameTable: React.FC = () => {
  const cards = shuffleCards();

  console.log(cards);
  return (
    <GameTableContainer>
      {cards.map((card) => {
        return <GameCard card={card} key={card.id} />;
      })}
    </GameTableContainer>
  );
};

export { GameTable };

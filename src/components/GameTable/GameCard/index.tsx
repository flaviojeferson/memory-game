import { GameCardContainer } from './styles.ts';
import questionMarkSvgSrc from '../../../assets/question_mark.svg';
import { useContext } from 'react';
import { MemoryGameCard } from '../../../@types/MemoryGame.ts';
import { MemoryGameContext } from '../../../contexts/MemoryGameContext.tsx';
import { flipCardById } from '../../../game/flipCardById.ts';

interface GameCardProps {
  card: MemoryGameCard;
}

const GameCard: React.FC<GameCardProps> = ({ card }) => {
  const { gameStateDispatch, gameState } = useContext(MemoryGameContext)!;
  const { iconSrc, isFlipped, id } = card;

  const getCardClassName = () => {
    const cardClasses = ['card'];

    if (isFlipped) cardClasses.push('card--visible');
    if (!gameState.isGaming || gameState.isChecking)
      cardClasses.push('card--blocked');

    return cardClasses.join(' ');
  };

  const currentIcon = isFlipped ? iconSrc : questionMarkSvgSrc;

  return (
    <GameCardContainer
      className={getCardClassName()}
      onClick={() => flipCardById({ gameState, gameStateDispatch }, id)}
    >
      <img className="card__icon" src={currentIcon} alt="" />
    </GameCardContainer>
  );
};

export { GameCard };

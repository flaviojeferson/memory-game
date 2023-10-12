import { GameCardContainer } from './styles.ts';
import questionMarkSvgSrc from '../../../assets/question_mark.svg';
import { useState } from 'react';
import { IGameCard } from '../../../@types/Game.ts';

type GameCardProps = {
  card: IGameCard;
};

const GameCard: React.FC<GameCardProps> = ({ card }) => {
  const { iconSrc } = card;
  const [isVisible, setIsVisible] = useState(false);

  const currentIcon = isVisible ? iconSrc : questionMarkSvgSrc;

  const handleToggleVisibility = () => setIsVisible(!isVisible);
  return (
    <GameCardContainer
      className={`card${isVisible ? ' card__visible' : ''}`}
      onClick={handleToggleVisibility}
    >
      <img className="card__icon" src={currentIcon} alt="" />
    </GameCardContainer>
  );
};

export { GameCard };

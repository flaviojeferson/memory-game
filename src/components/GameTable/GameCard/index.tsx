import { GameCardContainer } from './styles.ts';
import questionMarkSvgSrc from '../../../assets/question_mark.svg';
import { useState } from 'react';

const GameCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => setIsVisible(!isVisible);
  return (
    <GameCardContainer
      className={`card${isVisible ? ' card__visible' : ''}`}
      onClick={handleToggleVisibility}
    >
      <img className="card__icon" src={questionMarkSvgSrc} alt="" />
    </GameCardContainer>
  );
};

export { GameCard };

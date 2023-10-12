import { IGameCard } from '../@types/Game';
import { gameIcons } from '../assets/gameIcons';

function generatePairOfCard(iconSrc: string): IGameCard[] {
  return [
    { iconSrc, id: crypto.randomUUID(), isFlipped: false, isMatched: false },
    { iconSrc, id: crypto.randomUUID(), isFlipped: false, isMatched: false },
  ];
}

function shuffleArray(arr: IGameCard[]): IGameCard[] {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function shuffleCards(iconsSrc?: string[]) {
  const icons = iconsSrc || gameIcons;
  const unshuffledCards = icons.flatMap(generatePairOfCard);
  const shuffledCards = shuffleArray(unshuffledCards);
  return shuffledCards;
}

export { shuffleCards };

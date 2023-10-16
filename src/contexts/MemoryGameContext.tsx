import { ReactNode, createContext } from 'react';
import { MemoryGameReducer } from '../@types/MemoryGame';
import { useMemoryGame } from '../hooks/useMemoryGame';

const MemoryGameContext = createContext<undefined | MemoryGameReducer>(
  undefined,
);

type MemoryGameProviderProps = {
  children: ReactNode;
};

const MemoryGameProvider: React.FC<MemoryGameProviderProps> = ({
  children,
}) => {
  return (
    <MemoryGameContext.Provider value={useMemoryGame()}>
      {children}
    </MemoryGameContext.Provider>
  );
};

export { MemoryGameProvider, MemoryGameContext };

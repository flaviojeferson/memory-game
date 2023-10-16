import { AppContainer } from './styles/app';
import { defaultTheme } from './styles/themes/defaultTheme';
import { GameStatus } from './components/GameStatus';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { GameTable } from './components/GameTable';
import { MemoryGameProvider } from './contexts/MemoryGameContext';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <MemoryGameProvider>
          <GameStatus />
          <GameTable />
        </MemoryGameProvider>
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export { App };

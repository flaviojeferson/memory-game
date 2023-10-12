import { AppContainer } from './styles/app';
import { defaultTheme } from './styles/themes/defaultTheme';
import { GameStatus } from './components/GameStatus';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { GameTable } from './components/GameTable';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <GameStatus />
        <GameTable />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export { App };

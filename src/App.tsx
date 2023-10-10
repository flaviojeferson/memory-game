import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaultTheme';
import { AppContainer } from './styles/app';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <AppContainer></AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export { App };

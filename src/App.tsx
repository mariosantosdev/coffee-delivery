import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "~/styles/global";
import { theme } from "~/styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello World</h1>

      <GlobalStyle />
    </ThemeProvider>
  );
}

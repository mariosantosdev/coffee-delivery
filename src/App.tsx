import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "~/styles/global";
import { theme } from "~/styles/theme";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />

        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "~/styles/global";
import { theme } from "~/styles/theme";
import { CartProvider } from "./context/CartContext";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Router />

          <GlobalStyle />
          <Toaster />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

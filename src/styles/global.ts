import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.base["base_background"]};
        color: ${(props) => props.theme.colors.base["base_text"]};
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }
`;

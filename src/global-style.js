import { createGlobalStyle } from "styled-components";

export const GLOBAL_STYLES = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #fffafa;
        font-family: 'Poppins', sans-serif;
        color: #54423d;
    }
`;

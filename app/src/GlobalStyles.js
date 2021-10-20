import { createGlobalStyle } from "styled-components";

export const GlobalStyleComponent = createGlobalStyle`
    :root{
        --primary: #ff7a00;
        --secundary: #313131;
        --textPrimary: #000000;
        --textSecundary: #a3a0a0;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        color: var(---textPrimary);
    }
`
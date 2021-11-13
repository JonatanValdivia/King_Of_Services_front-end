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
        text-decoration: none;
    }

    a:link {
        color: white;
    }

    a:visited {
        color: white;
    }

    a:hover {
        color: white;
        font-weight: bold;
    }

    a:active {
        color: white;
    }
    
    body{
        font-family: sans-serif;
        color: var(---textPrimary);
    }
`
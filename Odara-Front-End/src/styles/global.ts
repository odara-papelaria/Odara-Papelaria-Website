import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue : #150ACB;
        --yellow: #CFFC00;
        --pink: #CE49FF;
        --blueclaro: #32DBBD;
        --orange: #FE5803;
        --orangeblack: #872d01;
        --red: #FF0000;
        
        --textwhite: #fff
        --textblack: #000000
        --textgray: #A4A2A2
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        width: 100%;
        
    }

    h1, h2, h3, h4, h5, strong{
        font-family: "Inter", sans-serif;
    }   

    button {
        cursor: pointer;
    }

    [disable]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Nunito sans";
        src: url(/fonts/NunitoSans-Regular.ttf) format("truetype");
        font-weight: normal;
    }

    @font-face {
        font-family: "Nunito sans";
        src: url(/fonts/NunitoSans-Bold.ttf) format("truetype");
        font-weight: bold;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, textarea, label, strong, div {
        font-family: "Nunito sans";
        font-style: normal;
    }

    * {
        font-family: "Nunito sans";
        font-style: normal;
    }

    main{
        padding:  0px 356px 30px 326px;
        margin-top: 107px;
        min-height: calc(100vh - 137px);
    }

    /* Estilo que deixa os placeholders transparentes quando o input está em foco */
    input::-webkit-input-placeholder {
        -webkit-transition: 0.5s;
    }
    input:-moz-input-placeholder {
        -moz-transition: 0.5s;
    }
    input::-moz-input-placeholder {
        -moz-transition: 0.5s;
    }
    input:-ms-input-placeholder {
        -ms-transition: 0.5s;
    }

    input:focus::-webkit-input-placeholder {
        color: transparent;
    }
    input:focus:-moz-placeholder {
        color: transparent;
    } /* FF 4-18 */
    input:focus::-moz-placeholder {
        color: transparent;
    } /* FF 19+ */
    input:focus:-ms-input-placeholder {
        color: transparent;
    } /* IE 10+ */    
`;

export default GlobalStyles;

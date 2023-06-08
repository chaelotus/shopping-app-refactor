import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;

    }
    html,body{
        font-family: "Inter";

    }
    a{
        text-decoration: none;
        color:inherit;
    }
    ul{
        padding:0;
    }
    li{
        list-style: none;
    }
`;
export default GlobalStyle;

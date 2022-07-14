import {createGlobalStyle} from 'styled-components';
export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Roboto', sans-serif;
    }
    a{
        text-decoration: none;
    }
    main,body, #root{
        height:100vh;
    }
    :root{
        --main-color-blue:#27485D;
        --main-color-red:#FF0000;
        --border-input: #ccc;
    }
`;
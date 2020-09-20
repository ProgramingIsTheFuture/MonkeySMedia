import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body, #root {
    background: var(--primary);

    margin: 0px;
    padding: 0px;

    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
  }

  :root {
    --primary: rgba(255, 218, 97, 67);
    --nav-color: rgba(159, 83, 18, 66);
    --card: rgba(129, 71, 21, 80);
    --white: #FFF;

  }
  
  button, input[type="button"], input[type="submit"] {
    :focus{
      outline:0;
    }
  }

`;

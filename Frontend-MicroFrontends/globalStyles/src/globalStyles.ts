import { createGlobalStyle } from "styled-components";

// rgba(166,82,8,1) castanho mais escuro
// rgba(217,130,24,1) castanho claro
// rgba(242,179,61,1) amarelo
// rgba(242,210,114,1) amarelo mais claro

let defaultTheme = {
  primary: "rgba(242,179,61,1)", //rgba(255, 218, 97, 67)", Old color
  secundary: "rgba(217,130,24,1)", // rgba(159, 83, 18, 66)",
  card: "rgba(166,82,8,1)", // rgba(129, 71, 21, 80)",
  white: "rgba(242,242,242,1)",
  red: "rgba(255,0,0,1)",
};

localStorage.setItem("default-theme", JSON.stringify(defaultTheme));

let theme = JSON.parse(localStorage.getItem("theme"));
if (theme) {
  theme =
    String(Object.keys(theme).sort((a, b) => a.localeCompare(b))) ===
    String(
      ["primary", "secundary", "white", "card", "red"].sort((a, b) =>
        a.localeCompare(b)
      )
    )
      ? theme
      : null;
}

export default createGlobalStyle`
  html {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    font-size: 85%;
    height: 100%;

    width: 100%;
    max-width: 100vw;
   }

  body {
    font-size: 1.6rem;
  }

  body, #root {
    background: var(--primary);

    margin: 0px;
    padding: 0px;

    width: 100%;
    height: 100%;
    max-width: 100vw;
  }

  :root {
	--primary: ${!theme ? defaultTheme.primary : theme.primary};
	--secundary: ${!theme ? defaultTheme.secundary : theme.secundary};
	--card: ${!theme ? defaultTheme.card : theme.card};
	--white: ${!theme ? defaultTheme.white : theme.white};

    --shadow: rgba(0,0,0,0.7);
    --red: ${!theme ? defaultTheme.red : theme.red};
    /* --card: rgba(255, 218, 97, 67);
    --secundary: rgba(159, 83, 18, 66);
    --primary: rgba(129, 71, 21, 80);
    --white: #FFF; */

  }


  button, input[type="button"], input[type="text"], input[type="submit"], textarea {
    :focus{
      outline:0;
    }
  }

  .ReactModal__Overlay {
    background-color: var(--shadow)!important;
  }

	.ReactModal__Content {
		padding: 0!important;
		background-color: var(--primary)!important;
	}

  .posts {
    width: 100vw;
  }

  @media screen and (min-width: 736px) {
    .posts {
      width: auto;
  }
}

`;

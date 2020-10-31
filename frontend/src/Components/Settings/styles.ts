import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  div {
    height: 100vh;
    margin: 0;
    padding: 0;
    display: grid;

    grid-template-areas:
      "menu info info"
      "menu info info";

    .menu-settings {
      margin: 0;
      padding-inline-start: 0;

      grid-area: menu;
      background-color: var(--card);

      li {
        margin: 15px;
        list-style: none;

        cursor: pointer;
      }
    }

    .info-settings-display {
      margin: 15px;
      grid-area: info;
    }
  }
`;

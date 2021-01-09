import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  div {
    height: 100vh;
    margin: 0;
    padding: 0;
    display: grid;

    grid-template-columns: 165px auto;

    .menu-settings {
      margin: 0;
      padding-inline-start: 0;

      background-color: var(--card);

      li {
        margin: 15px;
        list-style: none;

        text-align: center;
        cursor: pointer;
      }
    }

    .info-settings-display {
    }
  }
`;

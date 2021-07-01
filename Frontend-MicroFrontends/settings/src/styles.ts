import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  overflow-x: hidden;

  .Tab {
    display: grid;
  }

  div {
    margin: 0;
    padding: 0;

    grid-template-columns: 165px auto;

    .menu-settings {
      margin: 0;
      padding-inline-start: 0;

      background-color: var(--card);
      height: calc(100vh - 50px);

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

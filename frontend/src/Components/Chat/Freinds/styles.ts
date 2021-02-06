import styled from "styled-components";

export const Container = styled.div``;

export const FreindDiv = styled.div`
  height: 50px;

  margin: 5px 5px 0 5px;

  a {
    display: flex;
    flex-direction: row;

    background-color: var(--card);

    color: var(--white);
    width: 100%;

    text-decoration: none;

    div {
      span {
        margin-left: 15px;
      }
    }
  }
`;

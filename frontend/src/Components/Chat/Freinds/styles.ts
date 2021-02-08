import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  background-color: var(--nav-color);

  border-right: 1px solid var(--shadow);
  height: 50px;
`;

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

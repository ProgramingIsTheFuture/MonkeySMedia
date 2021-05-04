import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid var(--shadow);
  height: 100%;
`;

export const FreindDiv = styled.div`
  height: 72px;

  margin: 5px 5px 0 5px;

  a {
    display: flex;
    flex-direction: row;

    background-color: var(--card);

    color: var(--white);
    width: 100%;
    height: 100%;

    text-decoration: none;
    align-items: center;
    div {
      span {
        margin-left: 15px;
      }

      p {
        overflow: hidden;
        width: 90%;
        margin: 0;
        margin-left: 15px;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: horizontal;
        -moz-line-clamp: 9;
        -moz-box-orient: horizontal;
      }
    }
  }
`;

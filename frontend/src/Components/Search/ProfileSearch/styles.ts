import styled from "styled-components";

export const Container = styled.div`
  background: var(--card);
  margin: 15px;

  width: 735px;
  min-height: 150px;

  margin-left: 15px;
  color: black;

  div {
    div {
      display: flex;
      align-items: center;

      img {
        border: 1px solid rgba(0, 0, 0, 0.09);
        border-radius: 100%;
      }

      span {
        margin-left: 10px;
      }
    }

    div {
      p {
        text-align: center;
      }
    }
  }
`;

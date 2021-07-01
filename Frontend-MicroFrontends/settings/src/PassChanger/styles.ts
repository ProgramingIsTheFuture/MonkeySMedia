import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  div {
    display: flex;

    justify-content: center;
    flex-direction: column;

    input {
      width: 250px;
    }
  }
  button {
    margin-top: 15px;
    padding: 10px 15px;
    background-color: var(--secundary);
  }
`;

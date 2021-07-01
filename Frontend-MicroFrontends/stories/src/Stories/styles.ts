import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;

  flex-direction: column;
  margin-top: 15px;

  div.horizontal-menu {
    width: 100%;
    justify-content: center;

    div.menu-wrapper {
      width: 50%;
      height: 100px;

      display: flex;
      align-items: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: flex-end;

  flex-direction: column;
  align-items: flex-end;

  div {
    width: 80%;

    input[type="file"] {
      width: 115px;
    }
    button[type="submit"] {
      background-color: var(--secundary);
    }
    input,
    button {
      margin: 5px;
    }
  }
`;

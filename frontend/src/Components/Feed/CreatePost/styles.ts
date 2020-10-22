import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

   input {
    width: max(35%, 35vw);
  }

   button {
    background: var(--nav-color);
    color: var(--white);

    min-width: 150px;

    :hover {
      background: var(--card);
      color: var(--white);
    }
  }
`;

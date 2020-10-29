import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  input {
    text-align: center;
    margin-top: 80px;

    height: 50px;
    width: 80vw;
  }
`;

export const BackArrow = styled.nav`
  left: 0;
  top: 0;

  width: 100vw;
  height: 80;

  position: fixed;
  background: var(--nav-color);
`;

export const SearchedItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

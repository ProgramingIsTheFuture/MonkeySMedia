import styled from "styled-components";
import { ArrowBack } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  overflow-x: hidden;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    input {
      text-align: center;
      margin-top: 80px;

      height: 40px;
      width: 80vw;
    }
  }
`;

export const BackArrow = styled.nav`
  left: 0;
  top: 0;

  width: 100%;
  height: 50px;

  position: fixed;
  background: var(--nav-color);
`;

export const BackIcon = styled(ArrowBack)`
  height: 50px;
  width: 50px;
  color: var(--shadow);
`;

export const SearchedItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;

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

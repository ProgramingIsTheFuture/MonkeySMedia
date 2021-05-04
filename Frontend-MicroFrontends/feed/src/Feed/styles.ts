import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  .post-enter {
    opacity: 0;
  }
  .post-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .post-exit {
    opacity: 1;
  }
  .post-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
`;

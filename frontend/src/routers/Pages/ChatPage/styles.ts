import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: max(20%, 200px) auto;

  width: 100vw;
  height: calc(100vh - 50px);
`;

type Props = {
  username: string | null;
};

export const Chat = styled.div<Props>`
  width: 100%;

  ${(props) =>
    props.username
      ? null
      : "display: flex;justify-content: center;align-items: center;"}
`;

export const NoChat = styled.h3``;

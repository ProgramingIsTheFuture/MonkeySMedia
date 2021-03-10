import styled from "styled-components";

export const Container = styled.div`
  > div:last-child {
    display: grid;
    grid-template-columns: max(20%, 200px) auto;
    height: calc(100vh - 50px);
  }
`;

export const Header = styled.header`
  display: flex;
  background-color: var(--nav-color);

  border-right: 1px solid var(--shadow);
  height: 50px;

  width: auto;
  z-index: -1;
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

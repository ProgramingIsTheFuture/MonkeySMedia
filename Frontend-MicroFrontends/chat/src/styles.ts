import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  footer {
    order: 3;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    flex: none;
    width: 100%;
    min-height: 62px;
    margin-bottom: 15px;
  }
`;

export const Messages = styled.div`
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  order: 2;

  width: 100%;
  height: 100%;
`;

export const MessageContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: background 0.3s ease-out 0.1s;
`;

type Props = {
  right: boolean;
};

export const Message = styled.div<Props>`
  display: flex;
  justify-content: ${(props: Props) =>
    props.right ? "flex-end" : "flex-start"};

  align-items: center;
  margin: 7px;
`;

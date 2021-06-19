import styled from "styled-components";
import { Send } from "@styled-icons/fluentui-system-regular";

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

  padding: 6px 7px 8px 9px;

  div {
    margin: 0;
    background-color: ${(props: Props) =>
      !props.right ? "var(--card)" : "var(--nav-color)"};

    color: var(--white);
  }
`;

export const TimeStamp = styled.div`
  float: right;

  span {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="text"] {
    width: 88%;
    height: 48px;
  }
`;

export const SubmitBTN = styled.button`
  height: 54px;
  width: 54px;

  margin: 10px;
  border-radius: 25px;

  cursor: pointer;

  div {
    position: relative;
  }
`;

export const SendIcon = styled(Send)`
  height: 40px;
  width: 40px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

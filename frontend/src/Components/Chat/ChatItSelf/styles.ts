import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  form {
    margin-bottom: 15px;
  }
`;

export const Messages = styled.div``;

type Props = {
  right: boolean;
};
export const Message = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};

  align-items: center;
  margin: 7px;
`;

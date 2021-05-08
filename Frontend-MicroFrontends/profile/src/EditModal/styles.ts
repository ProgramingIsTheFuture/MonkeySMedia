import styled from "styled-components";
import { Close } from "styled-icons/evaicons-solid";

export const Container = styled.div``;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const CloseLeft = styled(Close)`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  textarea {
    height: 80px;
  }
`;

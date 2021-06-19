import styled from "styled-components";
import { Close } from "styled-icons/evaicons-solid";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: var(--primary);
`;

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

  align-items: center;

  label {
    margin-top: 5px;
    width: 50%;
  }

  input,
  textarea {
    margin-bottom: 5px;

    width: 50%;
  }

  textarea {
    height: 80px;
  }

  input[type="submit"] {
    margin-top: 5px;
    width: auto !important;
    padding: 10px 15px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  form {
    width: max(38%, 250px);
  }
  button {
    background: var(--secundary);
    color: var(--white);

    width: 100%;
    margin: 5px;

    :hover {
      background: var(--card);
      color: var(--white);
    }
  }
`;

export const TitleInp = styled.input`
  width: 100%;
  margin: 5px;
`;

export const TextInp = styled.textarea`
  width: 100%;
  margin: 5px;
  resize: none;
  height: 100px;
`;

export const FileInp = styled.input`
  width: 100%;
  margin: 5px;

  border: 1px solid black;

  text-rendering: none;
  ::before {
    content: "Partilha uma foto!";
  }

  ::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

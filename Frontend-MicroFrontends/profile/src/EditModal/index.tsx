import React from "react";
import Modal from "react-modal";

import { Container, Title, CloseLeft, Form } from "./styles";

type Props = {
  callBack: (val: boolean) => void;
  isModal: boolean;
};

const EditModal: React.FC<Props> = ({ callBack, isModal }) => {
  const handleQuit = (e: any) => {
    e.preventDefault();
    callBack(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Modal ariaHideApp={false} isOpen={isModal}>
        <Title>
          <h1>Edit Profile</h1>
          <CloseLeft onClick={handleQuit}></CloseLeft>
        </Title>

        <Form onSubmit={handleSubmit}>
          <input type={"file"} />
          <input type={"file"} />
          <input type={"text"} />
          <input type={"text"} />
          <input type={"text"} />
          <input type={"submit"} value={"Save the changes!"} />
        </Form>
      </Modal>
    </Container>
  );
};

export default EditModal;

import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import Modal from "react-modal";

import { Title, CloseLeft, Form } from "./styles";

const EditModal: React.FC = () => {
  const modal = useStoreState((state: any) => state.Modal.modal);
  const closeModal = useStoreActions((action: any) => action.Modal.closeModal);
  const handleQuit = (e: any) => {
    e.preventDefault();
    closeModal();
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Modal isOpen={modal}>
      <Title>
        <h1>Edit Profile</h1>
        <CloseLeft onClick={handleQuit}></CloseLeft>
      </Title>

      <Form onSubmit={handleSubmit}>
        <input type={"image"} />
        <input type={"image"} />
        <input type={"text"} />
        <input type={"text"} />
        <input type={"text"} />
        <input type={"submit"} value={"Save the changes!"} />
      </Form>
    </Modal>
  );
};

export default EditModal;

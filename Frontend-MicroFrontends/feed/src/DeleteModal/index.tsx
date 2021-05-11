import React from "react";
import { Container } from "./styles";

interface Props {
  visible: boolean;
  id: number;
  setVisible: () => void;
}

const DeleteModal = ({ visible, id, setVisible }) => {
  const handleDelete = () => {
    console.log("deleting", id);
    window.dispatchEvent(
      new CustomEvent("@monkeysmedia/Posts/delete", { detail: { id: id } })
    );
  };

  if (!visible) {
    return <></>;
  }

  return (
    <Container>
      <div>
        Confirm the delete btn
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => setVisible(false)}>Cancel</button>
      </div>
    </Container>
  );
};

export default DeleteModal;

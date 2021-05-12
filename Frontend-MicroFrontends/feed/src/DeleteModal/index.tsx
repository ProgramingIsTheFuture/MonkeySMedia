import React, { useEffect } from "react";
import { Container, Wrapper, Items, BTNGroup } from "./styles";

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
    setVisible(false);
  };

  if (!visible) {
    return <></>;
  }

  useEffect(() => {
    if (visible) {
      document.querySelector("body").style.overflow += "hidden";
    }
  }, [visible]);

  return (
    <Container>
      <Wrapper>
        <Items>
          <p>Confirma para apagar a tua publicação</p>
          <BTNGroup>
            <button onClick={handleDelete}>Confirmar</button>
            <button
              onClick={() => {
                document.querySelector("body").style.overflow = "initial";
                setVisible(false);
              }}
            >
              Cancelar
            </button>
          </BTNGroup>
        </Items>
      </Wrapper>
    </Container>
  );
};

export default DeleteModal;

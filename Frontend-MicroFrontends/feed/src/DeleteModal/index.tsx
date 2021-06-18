import React, { useEffect, useState } from "react";
import { Container, Wrapper, Items, BTNGroup } from "./styles";

interface Props {
  visible: boolean;
  id: number;
  setVisible: () => void;
}

const DeleteModal = ({ visible, id, setVisible }) => {
  const [positions, setPositions] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const handleDelete = () => {
    window.dispatchEvent(
      new CustomEvent(`@monkeysmedia/Posts/delete/${id}`, {
        detail: { id: id },
      })
    );
    setVisible(false);
  };

  useEffect(() => {
    if (visible) {
      setPositions({ x: window.scrollX, y: window.scrollY });
      document.querySelector("body").style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
  }, [visible, setPositions]);

  if (!visible) {
    return <></>;
  }

  return (
    <Container>
      <Wrapper>
        <Items>
          <p>Confirma para apagar a tua publicação</p>
          <BTNGroup>
            <button onClick={handleDelete}>Confirmar</button>
            <button
              onClick={() => {
                setVisible(false);
                window.scrollTo(positions.x, positions.y);
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

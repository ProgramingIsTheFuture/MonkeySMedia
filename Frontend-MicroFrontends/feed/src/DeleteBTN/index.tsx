import React, { useState } from "react";
import DeleteModal from "../DeleteModal";

import { Container, BTN } from "./styles";

export interface Props {
  postID: number;
}

const DeleteBTN: React.FC<Props> = ({ postID }) => {
  const [modal, setModal] = useState(false);

  const handler = (e: any) => {
    System.import("@monkeysmedia/util-module")
      .then((util) =>
        util.apiPost("api/posts/delete-post/", { id: e.detail.id })
      )
      .then(() => {})
      .catch();
  };

  window.addEventListener("@monkeysmedia/Posts/delete", handler, false);

  const handleDeletePost = () => {
    // Deleting posts API
    setModal(true);
  };

  return (
    <Container>
      <BTN onClick={handleDeletePost}></BTN>
      <DeleteModal visible={modal} setVisible={setModal} id={postID} />
    </Container>
  );
};

export default DeleteBTN;

import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal";

import { Container, BTN } from "./styles";

export interface Props {
  postID: number;
}

const DeleteBTN: React.FC<Props> = ({ postID }) => {
  const [modal, setModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  window.addEventListener("@monkeysmedia/Posts/delete", () => {
    setIsDelete(true);
  });

  useEffect(() => {
    if (isDelete) {
      System.import("@monkeysmedia/util-module")
        .then((util) => util.apiPost("api/posts/delete-post/", { id: postID }))
        .catch(() => {});
      setIsDelete(false);
    }
  }, [isDelete, setIsDelete, postID]);

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

export default React.memo(DeleteBTN);

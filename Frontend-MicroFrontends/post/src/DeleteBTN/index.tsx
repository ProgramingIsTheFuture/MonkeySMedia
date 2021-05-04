import React from "react";

import { Container, BTN } from "./styles";

export interface Props {
  postID: number;
}

const DeleteBTN: React.FC<Props> = ({ postID }) => {
  const handleDeletePost = () => {
    // Deleting posts API
    System.import("@monkeysmedia/util-module")
      .then((util) => util.apiPost("api/posts/delete-post/", { id: postID }))
      .then(() => {})
      .catch();
  };

  return (
    <Container>
      <BTN onClick={handleDeletePost}></BTN>
    </Container>
  );
};

export default DeleteBTN;

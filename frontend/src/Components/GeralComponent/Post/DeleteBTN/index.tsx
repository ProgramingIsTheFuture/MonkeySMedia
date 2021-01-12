import React from "react";
import { useStoreActions } from "easy-peasy";
import api from "../../../../services";
import { Container, BTN } from "./styles";

export interface Props {
  postID: number;
}

const DeleteBTN: React.FC<Props> = ({ postID }) => {
  const removePost = useStoreActions((action: any) => action.Posts.removePost);
  const token: any = localStorage.getItem("auth");

  const handleDeletePost = async () => {
    // Deleting posts API
    await api
      .post(
        "api/posts/delete-post/",
        { id: postID },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then(async () => {
        await removePost(postID);
      })
      .catch();
  };

  return (
    <Container>
      <BTN onClick={handleDeletePost}></BTN>
    </Container>
  );
};

export default DeleteBTN;

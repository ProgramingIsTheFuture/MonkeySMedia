import { useStoreState } from "easy-peasy";
import React from "react";
import api from "../../../../services";
import { PostType } from "../../../../Store/types";
import Likes from "../Likes";

import {
  Container,
  UserSimpleInfo,
  CardTitle,
  CardImage,
  CardContent,
} from "./styles";

export interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  const username = useStoreState((state: any) => state.User.username);
  const token: any = localStorage.getItem("auth");

  const handleDeletePost = (id: number) => {
    api
      .post(
        "api/posts/delete-post/",
        { id: id },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then(() => {})
      .catch();
  };
  return (
    <Container>
      <UserSimpleInfo>
        <div>
          <span>{post.user}</span>
          <div>{post.timestamp}</div>
          <div>
            {post.user === username ? (
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            ) : null}
          </div>
        </div>
      </UserSimpleInfo>
      <CardTitle>{post.title}</CardTitle>
      <CardContent>{post.content}</CardContent>
      {post.image ? (
        <CardImage>
          <img
            src={`http://localhost:8000/${post.image}`}
            width={"600px"}
            alt={`${post.user}`}
          />
        </CardImage>
      ) : null}
      <Likes id={post.id} likes={post.likes} />
    </Container>
  );
};

export default Post;

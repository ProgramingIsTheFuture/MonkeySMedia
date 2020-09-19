import React from "react";
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
  return (
    <Container>
      <UserSimpleInfo>
        <div>
          <span>{post.user}</span>
        </div>
        {post.timestamp}
      </UserSimpleInfo>
      <CardTitle>{post.title}</CardTitle>
      <CardContent>{post.content}</CardContent>
      {post.image ? (
        <CardImage>
          <img
            src={`http://localhost:8000/${post.image}`}
            width={"600px"}
            alt={`${post.user} image`}
          />
        </CardImage>
      ) : null}
      <Likes id={post.id} likes={post.likes} />
    </Container>
  );
};

export default Post;

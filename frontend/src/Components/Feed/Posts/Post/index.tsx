import React from "react";
import { PostType } from "../../../../Store/types";

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
    <Container key={post.id}>
      <UserSimpleInfo>{post.user}</UserSimpleInfo>
      <CardTitle>{post.title}</CardTitle>
      <CardImage></CardImage>
      <CardContent>{post.content}</CardContent>
    </Container>
  );
};

export default Post;

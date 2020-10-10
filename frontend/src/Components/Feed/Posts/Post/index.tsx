import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { Link } from "react-router-dom";
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
  const removePost = useStoreActions((action: any) => action.Posts.removePost);
  const token: any = localStorage.getItem("auth");

  const handleDeletePost = async (id: number) => {
    // Deleting posts API
    await api
      .post(
        "api/posts/delete-post/",
        { id: id },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then(async () => {
        await removePost(id);
      })
      .catch();
  };

  return (
    <Container>
      <UserSimpleInfo>
        <Link to={`/Profile/${post.user}`}>
          <div>
            <img
              src={`http://localhost:8000${post.profile_image}`}
              width={"30px"}
              height={"30px"}
              alt={"Profile"}
            />
            <span>{post.user}</span>
          </div>
        </Link>
      </UserSimpleInfo>
      <div>
        <div>{post.timestamp}</div>
        <div>
          {post.user === username ? (
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          ) : null}
        </div>
      </div>
      <CardTitle>{post.title}</CardTitle>
      <CardContent>{post.content}</CardContent>
      {post.image ? (
        <CardImage>
          <img
            src={`http://localhost:8000${post.image}`}
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

import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { Link } from "react-router-dom";
import api from "../../../services";
import { PostType } from "../../../Store/types";
import Likes from "./Likes";
import {
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Container,
  UserSimpleInfo,
  DateTime,
} from "./styles";

export interface Props {
  post: PostType;
  refe: any;
}

const Post: React.FC<Props> = ({ post, refe }) => {
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
    <Container ref={refe ? refe : null}>
      <UserSimpleInfo>
        <Link to={`/Profile/${post.user}`}>
          <div>
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}${post.profile_image}`}
              width={"45px"}
              height={"45px"}
              alt={"Profile"}
            />
            <span>{post.user}</span>
          </div>
        </Link>
        <div>
          {post.user === username ? (
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          ) : null}
        </div>
      </UserSimpleInfo>
      <DateTime>{post.timestamp}</DateTime>
      <Card>
        <CardTitle>{post.title}</CardTitle>
        <CardContent>{post.content}</CardContent>
        {post.image ? (
          <CardImage>
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}${post.image}`}
              alt={`${post.user}`}
            />
          </CardImage>
        ) : null}
      </Card>
      <Likes id={post.id} likes={post.likes} />
    </Container>
  );
};

export default Post;

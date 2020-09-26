import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import api from "../../../services";
import Post from "./Post";
import { PostType } from "../../../Store/types";

import { Container } from "./styles";

const Posts: React.FC = () => {
  const token: any = localStorage.getItem("auth");
  const setPosts = useStoreActions((action: any) => action.Posts.setPosts);
  const setUsername = useStoreActions((action: any) => action.User.setUsername);
  const Posts = useStoreState((state) => state.Posts.Posts);

  useEffect(() => {
    api
      .get("api/posts/list-posts/", {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then((resp) => {
        setPosts(resp.data);
      });
    api
      .get("api/users/get-user/", {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then((resp: any) => {
        const user = resp.data.username;
        setUsername(user ? user : null);
      });
  }, [token, setPosts, setUsername]);
  return (
    <Container>
      {Posts?.map((item: PostType) => (
        <Post key={item.id} post={item} />
      ))}
    </Container>
  );
};

export default Posts;

import React, { useState } from "react";
import api from "../../services";
import { useStoreActions } from "easy-peasy";
import Navbar from "../GeralComponent/Navbar";
import Posts from "./Posts";

import { Container } from "./styles";

const Feed = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const token: any = localStorage.getItem("auth");
  const addPost = useStoreActions((action: any) => action.Posts.addPost);

  const handleChange = (e: any, TexCont: boolean) => {
    e.preventDefault();
    TexCont ? setTitle(e.target.value) : setContent(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api
      .post(
        "api/posts/create-posts/",
        { title: title, content: content },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then((resp) => {
        if (resp.data) {
          addPost(resp.data);
          setTitle("");
          setContent("");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            value={title}
            onChange={(e) => handleChange(e, true)}
          />
          <input
            type={"text"}
            value={content}
            onChange={(e) => handleChange(e, false)}
          />
          <input type={"submit"} value={"Post"} />
        </form>

        <Posts />
      </Container>
    </div>
  );
};

export default Feed;

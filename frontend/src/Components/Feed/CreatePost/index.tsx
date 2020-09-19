import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";
import api from "../../../services";

import { Container } from "./styles";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<any>();
  const token: any = localStorage.getItem("auth");
  const addPost = useStoreActions((action: any) => action.Posts.addPost);

  const handleChange = (e: any, TexCont: boolean) => {
    e.preventDefault();
    TexCont ? setTitle(e.target.value) : setContent(e.target.value);
  };

  const handleImage = (e: any) => {
    console.log(e.target)
    // setImage(e.target.value)
  }

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

        <input type={"file"} value={image} onChange={handleImage} />

        <input type={"submit"} value={"Post"} />
      </form>
    </Container>
  );
};

export default CreatePost;

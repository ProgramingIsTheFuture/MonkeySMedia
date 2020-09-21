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

  const handleImage = (event: any) => {
    console.log(event.target.files)
    // if (event.target.files && event.target.files[0]) {
    //   let reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     setImage(e.target.result);
    //   };
    //   reader.readAsDataURL(event.target.files[0]);
    // }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api
      .post(
        "api/posts/create-posts/",
        { title: title, content: content, image: image },
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
          placeholder={"Post Title"}
          value={title}
          onChange={(e) => handleChange(e, true)}
        />
        <br />
        <input
          type={"text"}
          placeholder={"Post Content"}
          value={content}
          onChange={(e) => handleChange(e, false)}
        />
        <br />
        <input type={"file"} value={image} onChange={handleImage} />

        <br />
        <button type={"submit"}>Post</button>
      </form>
    </Container>
  );
};

export default CreatePost;

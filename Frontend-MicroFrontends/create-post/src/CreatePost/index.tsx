import React, { useState } from "react";

import { Container, TitleInp, TextInp, FileInp } from "./styles";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<any>("");

  const handleChange = (e: any, TexCont: boolean) => {
    e.preventDefault();
    TexCont ? setTitle(e.target.value) : setContent(e.target.value);
  };

  const handleImage = (event: any) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newPost = new FormData();
    newPost.append("title", title);
    newPost.append("content", content);
    if (image) {
      newPost.append("image", image, image.name);
    }

    (async () => {
      System.import("@monkeysmedia/util-module")
        .then((util) => util.apiPost("api/posts/create-posts/", newPost))
        .then((resp) => {
          if (resp.data) {
            window.dispatchEvent(
              new CustomEvent("@monkeysmedia/Posts/create", {
                detail: resp.data,
              })
            );
            setImage("");
            setTitle("");
            setContent("");
          }
        })
        .catch();
    })();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TitleInp
          type={"text"}
          placeholder={"What do you want to tell us?"}
          value={title}
          onChange={(e) => handleChange(e, true)}
        />
        <br />
        <TextInp
          placeholder={"Write here what happend!"}
          value={content}
          onChange={(e) => handleChange(e, false)}
        />
        <br />
        <FileInp type={"file"} onChange={handleImage} />
        <br />
        <button type={"submit"}>Post</button>
      </form>
    </Container>
  );
};

export default CreatePost;

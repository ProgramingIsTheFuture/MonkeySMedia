import React from "react";
import Navbar from "../GeralComponent/Navbar";
import Posts from "./Posts";

import { Container } from "./styles";
import CreatePost from "./CreatePost";

const Feed = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <CreatePost />

        <Posts />
      </Container>
    </div>
  );
};

export default Feed;

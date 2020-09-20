import React from "react";
import Navbar from "../../../Components/GeralComponent/Navbar";
import Posts from "../../../Components/Feed/Posts";

import { Container } from "./styles";
import CreatePost from "../../../Components/Feed/CreatePost";

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

import React from "react";
import { PostType } from "../../../Store/types";
import Post from "../../GeralComponent/Post";

interface Props {
  post: PostType;
}

const PostSearch: React.FC<Props> = ({ post }) => {
  return <Post refe={null} post={post} />;
};

export default PostSearch;

import React from "react";
import { PostType } from "../../../Store/types";
import Post from "../../Feed/Posts/Post";

interface Props {
  post: PostType;
}

const PostSearch: React.FC<Props> = ({ post }) => {
  return <Post post={post} />;
};

export default PostSearch;

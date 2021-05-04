import React from "react";
import Parcel from "single-spa-react/parcel";

interface Props {
  post: {
    id: number;
    user: string;
    title?: string;
    content?: string;
    image?: string;
    profile_image: string;
    likes: number;
    timestamp: string;
  };
}

const PostSearch: React.FC<Props> = ({ post }) => {
  return (
    <Parcel
      config={() => System.import("@monkeysmedia/post")}
      ref={null}
      post={post}
    />
  );
};

export default PostSearch;

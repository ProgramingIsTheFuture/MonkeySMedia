import React from "react";
import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";

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
      mountParcel={mountRootParcel}
      ref={null}
      post={post}
    />
  );
};

export default PostSearch;

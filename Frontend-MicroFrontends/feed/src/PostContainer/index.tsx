import React from "react";
import { motion } from "framer-motion";
import Post from "../Post";

const PostContainer = ({ item, index, postsLen, LastPostElement }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={"posts"}
    >
      <Post
        refe={postsLen === index + 1 ? LastPostElement : null}
        post={item}
      />
    </motion.div>
  );
};

export default PostContainer;

import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import api from "../../../services";
import Post from "../../GeralComponent/Post";
import { PostType } from "../../../Store/types";

import { Container } from "./styles";

const Posts: React.FC = () => {
  const token: any = localStorage.getItem("auth");
  const setPosts = useStoreActions((action: any) => action.Posts.setPosts);
  const setPageAction = useStoreActions((action: any) => action.Posts.setPage);
  const setUsername = useStoreActions((action: any) => action.User.setUsername);
  const Posts = useStoreState((state) => state.Posts.Posts);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const LastPostElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber: number) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loading]
  );

  useEffect(() => {
    setLoading(true);
    // getting all posts i can see
    api
      .get(`api/posts/list-posts/?page=${page}`, {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then((resp) => {
        setPosts({ posts: resp.data.results, page: page });
        setPageAction(page);

        if (resp.data.next) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err) {
          setHasMore(false);
        }
      });
  }, [token, setPosts, page, setPageAction]);

  useEffect(() => {
    // Getting "me" user infos
    api
      .get("api/users/get-user/", {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then((resp: any) => {
        const user = resp.data.username;
        setUsername(user ? user : null);
      });
  }, [token, setUsername]);

  if ((!Posts || Posts.length === 0) && loading) {
    return (
      <Container>
        <h2>Loading ...</h2>
      </Container>
    );
  }

  if ((!Posts || Posts.length === 0) && !loading) {
    return (
      <Container>
        <h2>Nothing to show!</h2>
      </Container>
    );
  }

  return (
    <Container>
      <div className={"posts"}>
        {Posts?.map((item: PostType, index: number) => {
          item.image = `${process.env.REACT_APP_BACKEND_URL}${item.image}`;
          if (Posts.length === index + 1) {
            return (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                key={index}
                className={"posts"}
              >
                <Post refe={LastPostElement} post={item}></Post>
              </motion.div>
            );
          }

          return (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              key={index}
              className={"posts"}
            >
              <Post refe={null} post={item}></Post>
            </motion.div>
          );
        })}
      </div>
      {loading ? <h2>Loading more posts</h2> : null}
      {!loading ? <h2>End!</h2> : null}
    </Container>
  );
};

export default Posts;

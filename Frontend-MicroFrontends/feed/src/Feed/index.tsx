import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useSWRInfinite } from "swr";

import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";

import { Container } from "./styles";
import Loader from "../Loader";

type PostType = {
  id: number;
  user: string;
  title?: string;
  content?: string;
  image?: string;
  profile_image: string;
  likes: number;
  timestamp: string;
};

type PostsData = {
  results: PostType[];
};

const pageSize = 15;

type Props = {
  usernameProfile?: string | null;
};

const Feed: React.FC<Props> = ({ usernameProfile }) => {
  let next: string | null;

  const { data, error, mutate, size, setSize } = useSWRInfinite(
    (index) =>
      !usernameProfile
        ? `api/posts/list-posts/?page=${index + 1}`
        : `api/posts/get-user-posts/?page=${index + 1}`,
    (url: string) =>
      System.import("@monkeysmedia/util-module")
        .then((util) =>
          !usernameProfile
            ? util.apiGet(url)
            : util.apiPost(url, { username: usernameProfile })
        )
        .then((resp) => {
          next = resp.data.next;
          return resp.data.results;
        })
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const LastPostElement = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && next) {
          setSize(size + 1);
          return;
        }
      });
      if (node) observer.current.observe(node);
    },
    [next, size, setSize]
  );

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  let posts = data ? [].concat(...data) : [];
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize) || !next;

  window.addEventListener(
    "@monkeysmedia/CreatePost/created",
    async (e: any) => {
      if (data) {
        try {
          let newPosts = await mutate([e.detail, ...posts], true);
          posts = [].concat(...newPosts);
        } catch (error) {
          console.error("Error creating new post or receiving the new one");
        }
      }
    }
  );

  if (isLoadingInitialData) {
    return <Loader />;
  }

  return (
    <Container>
      <div className={"posts"}>
        {isEmpty ? (
          <p>
            Experimenta seguir os teus amigos para veres as publicações deles!
          </p>
        ) : null}
        {posts.map((item: PostType, index: number) => {
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
              className={"post"}
            >
              <Parcel
                config={() => System.import("@monkeysmedia/post")}
                mountParcel={mountRootParcel}
                refe={posts.length === index + 1 ? LastPostElement : null}
                post={item}
              />
            </motion.div>
          );
        })}
        {isLoadingMore ? <Loader /> : null}
        {isReachingEnd && !isEmpty && !isLoadingMore ? (
          <p style={{ textAlign: "center" }}>
            Atualize a pagina para aparecerem os posts mais atualizados
          </p>
        ) : null}
      </div>
    </Container>
  );
};

export default React.memo(Feed);

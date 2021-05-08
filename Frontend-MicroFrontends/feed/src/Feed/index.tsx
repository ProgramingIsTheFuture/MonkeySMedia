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

const Feed: React.FC = () => {
  let next: string | null;

  const { data, error, mutate, size, setSize } = useSWRInfinite(
    (index) => `api/posts/list-posts/?page=${index + 1}`,
    (url: string) =>
      System.import("@monkeysmedia/util-module")
        .then((util) => util.apiGet(url))
        .then((resp) => {
          next = resp.data.next;
          return resp.data.results;
        })
  );

  window.addEventListener("@monkeysmedia/CreatePost/created", (e: any) => {
    if (data) {
      mutate([e.detail, ...data[0]], true);
    }
  });

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
  const posts = data ? [].concat(...data) : [];
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize) || !next;

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
        {posts?.map((item: PostType, index: number) => {
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
        {isReachingEnd && !isEmpty ? (
          <p style={{ textAlign: "center" }}>
            Atualize a pagina para aparecerem os posts mais atualizados
          </p>
        ) : null}
      </div>
    </Container>
  );
};

export default React.memo(Feed);

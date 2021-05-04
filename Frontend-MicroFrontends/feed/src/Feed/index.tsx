import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useSWRInfinite } from "swr";

import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";

import { Container } from "./styles";

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

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
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
  const LastPostElement = useCallback((node) => {
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
  }, []);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const posts = data ? [].concat(...data) : [];
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize) || !next;

  if (isLoadingMore) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          style={{
            width: "5rem",
            height: "5rem",
            display: "flex",
            justifyContent: "space-around",
          }}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={{
              display: "block",
              width: "1rem",
              height: "1rem",
              backgroundColor: "black",
              borderRadius: "0.25rem",
            }}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={{
              display: "block",
              width: "1rem",
              height: "1rem",
              backgroundColor: "black",
              borderRadius: "0.25rem",
            }}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={{
              display: "block",
              width: "1rem",
              height: "1rem",
              backgroundColor: "black",
              borderRadius: "0.25rem",
            }}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        </motion.div>
      </div>
    );
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
          if (posts.length === index + 1) {
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
                  refe={LastPostElement}
                  post={item}
                />
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
              <Parcel
                config={() => System.import("@monkeysmedia/post")}
                mountParcel={mountRootParcel}
                refe={null}
                post={item}
              />
            </motion.div>
          );
        })}
        {isLoadingMore ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              style={{
                width: "5rem",
                height: "5rem",
                display: "flex",
                justifyContent: "space-around",
              }}
              variants={loadingContainerVariants}
              initial="start"
              animate="end"
            >
              <motion.span
                style={{
                  display: "block",
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: "black",
                  borderRadius: "0.25rem",
                }}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              />
              <motion.span
                style={{
                  display: "block",
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: "black",
                  borderRadius: "0.25rem",
                }}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              />
              <motion.span
                style={{
                  display: "block",
                  width: "1rem",
                  height: "1rem",
                  backgroundColor: "black",
                  borderRadius: "0.25rem",
                }}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              />
            </motion.div>
          </div>
        ) : null}
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

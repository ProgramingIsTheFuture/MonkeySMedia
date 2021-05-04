import React, { useEffect, useState, useCallback, useRef } from "react";
import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";
import { motion } from "framer-motion";

import ProfileHeader from "./ProfileHeader";

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

export default function Root(props) {
  const [profileUsername, setProfileUsername] = useState<string>("");
  const [UserPosts, setUserPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setProfileUsername(util.getUsernamePropsUrl())
    );
  });

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
    // Getting the user posts
    if (typeof profileUsername === "string" && profileUsername !== "") {
      System.import("@monkeysmedia/util-module")
        .then((util) =>
          util.apiPost(`api/posts/get-user-posts/?page=${page}`, {
            username: profileUsername,
          })
        )
        .then((resp) => {
          setUserPosts(resp.data.results);
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
    }
  }, [page, profileUsername]);

  return (
    <Container>
      <ProfileHeader username={profileUsername} />
      {loading ? <h1>Loading</h1> : null}
      {UserPosts?.map((item: PostType, index: number) => {
        if (UserPosts.length === index + 1) {
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
    </Container>
  );
}

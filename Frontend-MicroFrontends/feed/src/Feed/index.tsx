import React, { useCallback, useRef } from "react";
import { useSWRInfinite } from "swr";

import { Container } from "./styles";
import Loader from "../Loader";
import Post from "../Post";
import PostContainer from "../PostContainer";

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
  let posts = React.useMemo(() => (data ? [].concat(...data) : []), [data]);
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize) || !next;

  window.addEventListener("@monkeysmedia/CreatePost/created", async () => {
    if (data) {
      try {
        await mutate();
      } catch (error) {
        console.error("Error creating new post or receiving the new one");
      }
    }
  });

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
            <PostContainer
              item={item}
              index={index}
              postsLen={posts.length}
              LastPostElement={LastPostElement}
            />
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

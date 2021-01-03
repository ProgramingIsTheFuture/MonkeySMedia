import { useStoreActions } from "easy-peasy";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services";
import { PostType } from "../../Store/types";
import Post from "../GeralComponent/Post";
import ProfileHeader from "./ProfileHeader";

import { Container } from "./styles";

interface Props {
  username: string;
}

const Profiles: React.FC<Props> = ({ username }) => {
  const token: any = localStorage.getItem("auth");
  const getProfileInfo = useStoreActions(
    (action: any) => action.Profile.getProfileInfo
  );
  const history = useHistory();
  const [UserPosts, setUserPosts] = useState<PostType[]>([]);
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
    // Getting the Profile info
    if (typeof username === "string" && username !== "") {
      api
        .post(
          "api/profile/get-profile/",
          { username: username },
          {
            headers: { Authorization: `Token ${JSON.parse(token).token}` },
          }
        )
        .then((resp) => {
          getProfileInfo(resp.data);
        })
        .catch(() => {
          history.push("/");
        });
    }
  }, [username, getProfileInfo, token, history]);

  useEffect(() => {
    // Getting the user posts
    api
      .post(
        `api/posts/get-user-posts/?page=${page}`,
        { username: username },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then((resp) => {
        setUserPosts(resp.data.results);
        console.log(resp.data.count, UserPosts.length);
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
  }, [username, token, page]);
  return (
    <Container>
      <ProfileHeader />
      {UserPosts?.map((item: PostType, index: number) => {
        if (UserPosts.length === index + 1) {
          return <Post refe={LastPostElement} key={item.id} post={item} />;
        }
        return <Post refe={null} key={item.id} post={item} />;
      })}
    </Container>
  );
};

export default Profiles;

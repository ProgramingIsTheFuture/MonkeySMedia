import { useStoreActions } from "easy-peasy";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services";
import { PostType } from "../../Store/types";
import Post from "../Feed/Posts/Post";
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

  useEffect(() => {
    // Getting the Profile info
    if (typeof username === "string" && username !== "") {
      api
        .post(
          "api/profile/get-me/",
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

    // Getting the user posts
    api
      .post(
        "api/posts/get-user-posts/",
        { username: username },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then((resp) => setUserPosts(resp.data));
  }, [username, getProfileInfo, token, history]);
  return (
    <Container>
      <ProfileHeader />
      {UserPosts?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Container>
  );
};

export default Profiles;

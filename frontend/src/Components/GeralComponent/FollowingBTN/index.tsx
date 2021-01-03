import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect, useState } from "react";
import api from "../../../services";

import { Container } from "./styles";

interface Props {
  username: string;
}

const FollowingBTN: React.FC<Props> = ({ username }) => {
  console.log(username);
  const token: any = localStorage.getItem("auth");
  const [follText, setFollText] = useState<string>("Follow");
  const followers = useStoreState(
    (state: any) => state.Profile.ProfileInfo.followers
  );
  const remOrAddFollow = useStoreActions(
    (action: any) => action.Profile.remOrAddFollow
  );

  const handleClick = (e: any) => {
    e.preventDefault();
    api
      .post(
        "api/profile/follow-unfollow/",
        { username: username },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then((resp: any) => {
        if (resp.data.Follow === "Success") {
          remOrAddFollow(followers + 1);
          setFollText("Following");
        } else if (resp.data.Follow === "Stop Following") {
          remOrAddFollow(followers - 1);
          setFollText("Follow");
        }
      })
      .catch();
  };

  useEffect(() => {
    console.log(username);
    api
      .post(
        "api/profile/check-follow-profile/",
        { username: username },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then((res: any) => {
        if (res.data[0] === "true") {
          setFollText("Following");
        } else if (res.data[0] === "false") {
          setFollText("Follow");
        }
      })
      .catch();
  }, [setFollText, token, username, remOrAddFollow, followers]);

  return <Container onClick={handleClick}>{follText}</Container>;
};

export default FollowingBTN;

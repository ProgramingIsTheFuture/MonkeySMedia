import React, { useEffect, useState } from "react";

import { Container } from "./styles";

interface Props {
  username: string;
}

const FollowingBTN: React.FC<Props> = ({ username }) => {
  const [follText, setFollText] = useState<string>("Follow");
  const [follow, setFollow] = useState<number>(0);

  const handleClick = (e: any) => {
    e.preventDefault();
    System.import("@monkeysmedia/util-module")
      .then((util) =>
        util.apiPost("api/profile/follow-unfollow/", {
          username: username,
        })
      )
      .then((resp: any) => {
        if (resp.data.Follow === "Success") {
          // +1 follower
          setFollow(1);

          setFollText("Following");
        } else if (resp.data.Follow === "Stop Following") {
          // -1 follower
          setFollow(-1);
          setFollText("Follow");
        }
      })
      .catch();
    if (follow != 0) {
      window.dispatchEvent(
        new CustomEvent("@monkeysmedia/profile-follow-unfollow", {
          detail: {
            follow: follow,
          },
        })
      );
    }
    setFollow(0);
  };

  useEffect(() => {
    if (username.length > 0) {
      System.import("@monkeysmedia/util-module")
        .then((util) =>
          util.apiPost("api/profile/check-follow-profile/", {
            username: username,
          })
        )
        .then((res: any) => {
          if (res.data[0] === "true") {
            setFollText("Following");
          } else if (res.data[0] === "false") {
            setFollText("Follow");
          }
        })
        .catch();
    }
  }, [setFollText, username]);

  return <Container onClick={handleClick}>{follText}</Container>;
};

export default FollowingBTN;

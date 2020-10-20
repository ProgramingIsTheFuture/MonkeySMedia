import React from "react";
import api from "../../../services";

import { Container } from "./styles";

interface Props {
  username: string;
}

const FollowingBTN: React.FC<Props> = ({ username }) => {
  const token: any = localStorage.getItem("auth");
  const handleClick = (e: any) => {
    e.preventDefault();
    api
      .post(
        "api/profile/follow-unfollow/",
        { username: username },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then((resp: any) => console.log(resp))
      .catch();
  };
  return <Container onClick={handleClick}>Follow</Container>;
};

export default FollowingBTN;

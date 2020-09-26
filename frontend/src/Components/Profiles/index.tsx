import { useStoreActions } from "easy-peasy";
import React, { useEffect } from "react";
import api from "../../services";

import { Container } from "./styles";

interface Props {
  username: string;
}

const Profiles: React.FC<Props> = ({ username }) => {
  const token: any = localStorage.getItem("auth");
  const getProfileInfo = useStoreActions((action: any) => action.Profile.getProfileInfo)

  useEffect(() => {
    api
      .get("api/profile/get-me/", {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then((resp) => getProfileInfo(resp.data));
  }, []);
  return <Container>{username}</Container>;
};

export default Profiles;

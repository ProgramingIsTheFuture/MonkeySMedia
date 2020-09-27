import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import api from "../../services";

import { Container } from "./styles";

interface Props {
  username: string;
}

const Profiles: React.FC<Props> = ({ username }) => {
  const token: any = localStorage.getItem("auth");
  const getProfileInfo = useStoreActions(
    (action: any) => action.Profile.getProfileInfo
  );
  const ProfileInfo = useStoreState((state: any) => state.Profile.ProfileInfo);

  useEffect(() => {
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
      });
  }, [username, getProfileInfo, token]);
return <Container>{ProfileInfo.user} {ProfileInfo.profile_image}<img src={`http://localhost:8000${ProfileInfo.profile_image}`} /></Container>;
};

export default Profiles;

import { useStoreState } from "easy-peasy";
import React from "react";
import { Link } from "react-router-dom";
import EditProfile from "../EditProfile";

import { Container, NavFixed, BackIcon, Image, Username, Description } from "./styles";

const ProfileHeader: React.FC = () => {
  const ProfileInfo = useStoreState((state: any) => state.Profile.ProfileInfo);
  const currentUser = useStoreState((state: any) => state.User.username);

  return (
    <Container>
      <NavFixed>
        <Link to="/">
          <BackIcon />
        </Link>
      </NavFixed>
      <Image>
        <img
          src={`http://localhost:8000${ProfileInfo.profile_image}`}
          alt={`${ProfileInfo.user} Profile`}
        />
      </Image>
      <Username>{ProfileInfo.user}</Username>
      <Description>{ProfileInfo.description}</Description>
      {currentUser === ProfileInfo.user ? <EditProfile /> : null}
    </Container>
  );
};

export default ProfileHeader;

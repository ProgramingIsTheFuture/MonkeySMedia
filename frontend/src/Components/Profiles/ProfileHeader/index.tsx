import { useStoreState } from "easy-peasy";
import React from "react";
import { Link } from "react-router-dom";

import { Container, BackIcon, Image, Username, Description } from "./styles";

const ProfileHeader: React.FC = () => {
  const ProfileInfo = useStoreState((state: any) => state.Profile.ProfileInfo);
  return (
    <Container>
      <Link to="/">
        <BackIcon />
      </Link>
      <Image>
        <img src={`http://localhost:8000${ProfileInfo.profile_image}`} alt={`${ProfileInfo.user} Profile`} />
      </Image>
      <Username>{ProfileInfo.user}</Username>
      <Description>{ProfileInfo.description}</Description>
    </Container>
  );
};

export default ProfileHeader;

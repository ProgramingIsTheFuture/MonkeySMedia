import React from "react";
import { Container } from "./styles";

type Props = {
  profile_img: string;
  username: string;
};

const ProfileIcon: React.FC<Props> = (props) => {
  return (
    <Container>
      <img src={props.profile_img} alt="profile" />
      <span className="accountName">{props.username}</span>
    </Container>
  );
};

export default ProfileIcon;

import React from "react";
import Profiles from "../../../Components/Profiles";
import EditModal from "../../../Components/Profiles/EditModal";

import { Container } from "./styles";

interface Props {
  match: {
    params: {
      username: string;
    };
  };
}

const ProfilePage: React.FC<Props> = ({ match }) => {
  const username = match.params.username;
  return (
    <Container>
      <Profiles username={username} />
      <EditModal />
    </Container>
  );
};

export default ProfilePage;

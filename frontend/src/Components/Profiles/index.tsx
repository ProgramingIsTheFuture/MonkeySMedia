import React from "react";

import { Container } from "./styles";

interface Props {
  username: string;
}

const Profiles: React.FC<Props> = ({ username }) => {
  return <Container>{username}</Container>;
};

export default Profiles;

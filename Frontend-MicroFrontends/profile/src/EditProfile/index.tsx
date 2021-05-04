import React from "react";

import { Container } from "./styles";

type Props = {
  callBack: (val: boolean) => void;
};

const EditProfile: React.FC<Props> = ({ callBack }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    callBack(true);
  };

  return <Container onClick={handleClick}>Edit Profile</Container>;
};

export default EditProfile;

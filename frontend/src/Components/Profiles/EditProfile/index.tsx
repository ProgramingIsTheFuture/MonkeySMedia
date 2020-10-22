import { useStoreActions } from "easy-peasy";
import React from "react";

import { Container } from "./styles";

const EditProfile: React.FC = () => {
  const openModal = useStoreActions((action: any) => action.Modal.openModal);

  const handleClick = (e: any) => {
    e.preventDefault();
    openModal();
  };

  return <Container onClick={handleClick}>Edit Profile</Container>;
};

export default EditProfile;

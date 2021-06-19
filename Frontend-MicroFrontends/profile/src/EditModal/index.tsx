import React, { useState } from "react";
import Modal from "react-modal";

import { Container, Wrapper, Title, CloseLeft, Form } from "./styles";

interface ProfileInfoTypes {
  id: number;
  user: string;
  first_name: string;
  last_name: string;
  profile_image: string;
  background_profile_image: string;
  description: string;
  following: number;
  followers: number;
}

type Props = {
  callBack: (val: boolean) => void;
  isModal: boolean;
  setProfile: (any) => void;
  profile: ProfileInfoTypes;
};

const EditModal: React.FC<Props> = ({
  callBack,
  isModal,
  setProfile,
  profile,
}) => {
  const [fname, setFName] = useState<string>(profile.first_name);
  const [lname, setLName] = useState<string>(profile.last_name);
  const [username, setUsername] = useState<string>(profile.user);
  const [description, setDescription] = useState<string>(profile.description);

  const handleQuit = (e: any) => {
    e.preventDefault();
    callBack(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    System.import("@monkeysmedia/util-module")
      .then((util) =>
        util.apiPost("api/profile/edit-my-profile/", {
          first_name: fname,
          last_name: lname,
          description: description,
          username: username,
        })
      )
      .then((resp) => {
        setProfile(resp.data);
        callBack(false);
      })
      .catch();
  };

  return (
    <Container>
      <Modal ariaHideApp={false} isOpen={isModal}>
        <Wrapper>
          <Title>
            <h1>Edit Profile</h1>
            <CloseLeft onClick={handleQuit}></CloseLeft>
          </Title>

          <Form onSubmit={handleSubmit}>
            <label htmlFor={"background_img"}>Imagem de fundo</label>
            <input type={"file"} name={"background_img"} />
            <label htmlFor={"profile_img"}>Imagem de Perfil</label>
            <input type={"file"} name={"profile_img"} />
            <label htmlFor={"username"}>Username</label>
            <input
              type={"text"}
              name={"username"}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <label htmlFor={"description"}>Descrição</label>
            <textarea
              name={"description"}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <label htmlFor={"first_name"}>Primeiro Nome</label>
            <input
              type={"text"}
              name={"first_name"}
              onChange={(e) => setFName(e.target.value)}
              value={fname}
            />
            <label htmlFor={"last_name"}>Ultímo Nome</label>
            <input
              type={"text"}
              name={"last_name"}
              onChange={(e) => setLName(e.target.value)}
              value={lname}
            />
            <input type={"submit"} value={"Save the changes!"} />
          </Form>
        </Wrapper>
      </Modal>
    </Container>
  );
};

export default EditModal;

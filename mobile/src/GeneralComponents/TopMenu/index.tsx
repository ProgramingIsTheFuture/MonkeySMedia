import React from "react";
import { Image } from "react-native";

import { Container, Title } from "./styles";

interface Props {
  imageUrl?: string;
  title: string;
}

const Header: React.FC<Props> = ({ imageUrl, title }) => {
  if (imageUrl ? imageUrl.length > 0 : false) {
    return (
      <Container>
        <Title>{title}</Title>
      </Container>
    );
  }
  return (
    <Container>
      <Image
        source={{ uri: `${process.env.REACT_APP_BACKEND_URL}/${imageUrl}` }}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;

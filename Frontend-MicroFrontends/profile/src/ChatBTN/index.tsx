import React from "react";
import { navigateToUrl } from "single-spa";

import { Container } from "./styles";

interface Props {
  username: string;
}

const ChatBTN: React.FC<Props> = ({ username }) => {
  return (
    <Container onClick={() => navigateToUrl(`/chat/${username}`)}>
      Chat
    </Container>
  );
};

export default ChatBTN;

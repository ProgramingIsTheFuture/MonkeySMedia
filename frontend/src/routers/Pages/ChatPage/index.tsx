import React from "react";

import ChatItSelf from "../../../Components/Chat/ChatItSelf";
import Freinds from "../../../Components/Chat/Freinds";
import { Container, Chat, NoChat } from "./styles";
import Navbar from "../../../Components/GeralComponent/Navbar";

interface Props {
  match: {
    params: {
      username?: string;
    };
  };
}

const ChatPage: React.FC<Props> = ({ match }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Freinds />
        <Chat username={match.params.username ? match.params.username : null}>
          {match.params.username ? (
            <ChatItSelf username={match.params.username} />
          ) : (
            <NoChat>Select a chat to start chating</NoChat>
          )}
        </Chat>
      </Container>
    </>
  );
};

export default ChatPage;

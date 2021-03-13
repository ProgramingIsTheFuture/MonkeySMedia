import React from "react";
import { Link } from "react-router-dom";

import ChatItSelf from "../../../Components/Chat/ChatItSelf";
import Freinds from "../../../Components/Chat/Freinds";
import { Container, Header, Chat, NoChat } from "./styles";
import {
  NavFixed,
  BackIcon,
} from "../../../Components/Profiles/ProfileHeader/styles";

interface Props {
  match: {
    params: {
      username?: string;
    };
  };
}

const ChatPage: React.FC<Props> = ({ match }) => {
  return (
    <Container>
      <div>
        <Header>
          <NavFixed>
            <Link to="/">
              <BackIcon />
            </Link>
          </NavFixed>
        </Header>
      </div>
      <div>
        <Freinds />
        <Chat username={match.params.username ? match.params.username : null}>
          {match.params.username ? (
            <ChatItSelf username={match.params.username} />
          ) : (
            <NoChat>Select a chat to start chating</NoChat>
          )}
        </Chat>
      </div>
    </Container>
  );
};

export default ChatPage;

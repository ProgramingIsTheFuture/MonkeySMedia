import React, { useEffect, useState } from "react";
import { Container, Messages, Message } from "./styles";
import api from "../../../services";
import { useStoreState } from "easy-peasy";
import useSWR, { mutate } from "swr";

type Props = {
  username: string;
};

type MessagesDB = {
  id: number;
  user_receiver: string;
  user_sender: string;
  message: string;
  timestamp: string;
};

const ChatItSelf: React.FC<Props> = ({ username }) => {
  const token: any = localStorage.getItem("auth");
  const [message, setMessage] = useState<string>("");
  const [socket, setSocket] = useState<any>(null);
  const me = useStoreState((state: any) => state.User.username);

  const fetcher = (url: string) =>
    api.post(
      url,
      { username: username },
      { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
    );

  const { data, error } = useSWR("api/chat/all-messages/", fetcher);
  console.log(data);

  useEffect(() => {
    setSocket(
      new WebSocket(
        `${
          process.env.REACT_APP_CHAT_URL
            ? process.env.REACT_APP_CHAT_URL
            : "ws://localhost:8000"
        }/ws/chat/${username}/?token=${JSON.parse(token).token}`
      )
    );
  }, [token, username]);

  useEffect(() => {
    if (socket) {
      socket!.onopen = function (e: any) {
        console.log(e);
      };

      socket!.onmessage = function (event: any) {
        mutate("api/chat/all-messages/");
      };

      socket!.onclose = function (event: any) {
        console.log(event);
      };

      socket!.onerror = function (error: any) {
        console.log(error);
      };
    }
  }, [socket]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (message !== "") {
      socket.send(message);
      setMessage("");
      mutate("api/chat/all-messages/");
    }
  };

  const messageChange = (e: any) => {
    setMessage(e.target.value);
  };

  if (!data) {
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <input type={"text"} onChange={messageChange} value={message} />
          <input type={"submit"} />
        </form>
        {username}
      </Container>
    );
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type={"text"} onChange={messageChange} value={message} />
        <input type={"submit"} />
      </form>
      {username}
      <Messages>
        {data.data.map((item: MessagesDB) => {
          if (me === item.user_sender) {
            return (
              <Message right={true}>
                <div>{item.user_sender}</div>
                <div>{item.message}</div>
              </Message>
            );
          }
          return (
            <Message right={false}>
              <div>{item.user_sender}</div>
              <div>{item.message}</div>
            </Message>
          );
        })}
      </Messages>
    </Container>
  );
};

export default ChatItSelf;

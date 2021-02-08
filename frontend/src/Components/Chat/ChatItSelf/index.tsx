import React, { useEffect, useState } from "react";
import { Container, Messages, Message } from "./styles";
import api from "../../../services";
import useSWR, { mutate } from "swr";
import HeaderProfile from "../HeaderProfile";

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

  const fetcher = (url: string) =>
    api
      .post(
        url,
        { username: username },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then((resp) => resp.data);

  const { data } = useSWR<MessagesDB[]>("api/chat/all-messages/", fetcher);
  const me = useSWR<string>("api/users/get-user/", (url) =>
    api
      .get(url, {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then((resp) => resp.data.username)
  );

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

      socket!.onmessage = function () {
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
      mutate(
        "api/chat/all-messages/",
        [
          ...data!,
          {
            id: data![data!.length - 1].id + 1,
            message: message,
            user_receiver: username,
            user_sender: me.data,
          },
        ],
        true
      );
      setMessage("");
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
        {data!.map((item: MessagesDB) => {
          if (me.data === item.user_sender) {
            return (
              <Message right={true} key={item.id}>
                <div>
                  <div>{item.timestamp}</div>
                </div>
                <div>
                  <div>{item.user_sender}</div>
                  <div>{item.message}</div>
                </div>
              </Message>
            );
          }
          return (
            <Message right={false} key={item.id}>
              <div>
                <div>{item.user_sender}</div>
                <div>{item.message}</div>
              </div>
              <div>
                <div>{item.timestamp}</div>
              </div>
            </Message>
          );
        })}
      </Messages>
      <HeaderProfile username={username} />
    </Container>
  );
};

export default ChatItSelf;

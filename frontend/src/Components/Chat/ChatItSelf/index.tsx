import React, { useEffect, useState } from "react";
import { Container, Messages, Message } from "./styles";
import api from "../../../services";
import useSWR from "swr";
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
  const [allMessages, setAllMessages] = useState<MessagesDB[]>([]);

  const [reloadMsg, setReloadMsg] = useState<boolean>(true);

  useEffect(() => {
    if (reloadMsg) {
      api
        .post(
          "api/chat/all-messages/",
          { username: username },
          { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
        )
        .then((resp) => setAllMessages(resp.data));
      setReloadMsg(false);
    }
  }, [token, username, reloadMsg]);

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
        `${"ws://api.themonkeysmedia.com:8000"}/ws/chat/${username}/?token=${
          JSON.parse(token).token
        }`
      )
    );
  }, [token, username]);

  useEffect(() => {
    if (socket) {
      socket!.onopen = function () {};

      socket!.onmessage = function () {
        setReloadMsg(true);
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
      while (socket.CONNECTING) {}
      socket.send(message);
      setAllMessages([
        ...allMessages,
        {
          id: Number(allMessages.length),
          user_receiver: username,
          user_sender: String(me.data),
          message: message,
          timestamp: "",
        },
      ]);
      setMessage("");
    }
  };

  const messageChange = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type={"text"} onChange={messageChange} value={message} />
        <input type={"submit"} />
      </form>
      {username}
      <Messages>
        {allMessages.map((item: MessagesDB) => {
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

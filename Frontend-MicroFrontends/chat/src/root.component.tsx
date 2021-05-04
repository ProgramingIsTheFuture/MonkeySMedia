import React, { useEffect, useState } from "react";
import { Container, Messages, Message } from "./styles";
import useSWR from "swr";
import HeaderProfile from "./HeaderProfile";

type MessagesDB = {
  id: number;
  user_receiver: string;
  user_sender: string;
  message: string;
  timestamp: string;
};

export default function Root(props) {
  const [sendToUser, setSendToUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [socket, setSocket] = useState<any>(null);
  const [allMessages, setAllMessages] = useState<MessagesDB[]>([]);

  const [reloadMsg, setReloadMsg] = useState<boolean>(true);

  window.addEventListener("@monkeysmedia/chat/changeChat", (e: any) => {
    setSendToUser(e.detail.user);
  });

  const me = useSWR<string>("api/users/get-user/", (url) =>
    System.import("@monkeysmedia/util-module")
      .then((util) => util.apiGet(url))
      .then((resp) => resp.data.username)
  );

  useEffect(() => {
    if (reloadMsg && sendToUser !== "") {
      System.import("@monkeysmedia/util-module")
        .then((util) =>
          util.apiPost("api/chat/all-messages/", { username: sendToUser })
        )
        .then((resp) => setAllMessages(resp.data));
      setReloadMsg(false);
    }
  }, [sendToUser, reloadMsg]);

  useEffect(() => {
    if (sendToUser === "") {
      System.import("@monkeysmedia/util-module")
        .then((util) => setSendToUser(util.getUsernamePropsUrl()))
        .catch();
    }
  }, [sendToUser]);

  useEffect(() => {
    if (sendToUser !== "") {
      const token = localStorage.getItem("auth");
      const wsUrl = `ws://localhost:8000/ws/chat/${sendToUser}/?token=${
        JSON.parse(token).token
      }`;
      setSocket(new WebSocket(wsUrl));
    }
  }, [sendToUser]);

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
          id: Number(allMessages.length) + 1,
          user_receiver: sendToUser,
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
      {sendToUser}
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
      <HeaderProfile username={sendToUser} />
    </Container>
  );
}
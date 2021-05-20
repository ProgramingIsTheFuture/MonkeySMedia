import React, { useEffect, useState } from "react";
import {
  Container,
  NotificationContainer,
  ButtonDiv,
  Notification,
  Profile,
} from "./styles";

interface Notification {
  id: Number;
  user: string;
  sender: {
    id: Number;
    user: string;
    profile_image: string;
  };
  message: string;
  is_read: boolean;
  timestamp: string;
}

export default function Root(props) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [reload, setReload] = useState<boolean>(true);

  const markAsRead = () => {
    System.import("@monkeysmedia/util-module").then((util) =>
      util
        .apiGet("api/chat/mark-as-read/")
        .then((r: any) => setNotifications(r.data))
    );
    window.dispatchEvent(
      new CustomEvent("@monkeysmedia/notification/read", {})
    );
  };

  window.addEventListener("@monkeysmedia/notification/new", () => {
    setReload(true);
  });

  useEffect(() => {
    if (reload) {
      System.import("@monkeysmedia/util-module").then((util) =>
        util
          .apiGet("api/chat/list-notifications/")
          .then((r: any) => setNotifications(r.data))
      );
      setReload(false);
    }
  }, [reload, setReload, setNotifications]);

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);

  return (
    <Container>
      <div>
        <div>
          <h1>Notificações</h1>
        </div>
        <NotificationContainer>
          <ButtonDiv>
            <button onClick={markAsRead}>Marcar todos como visto</button>
          </ButtonDiv>
          {notifications.map((item, index) => (
            <div key={index} style={{ width: "75%" }}>
              <Notification>
                <Profile>
                  <div>
                    <img
                      src={`${baseUrl}${item.sender.profile_image.substring(
                        1
                      )}`}
                      alt={"profile img"}
                      width={"70px"}
                      height={"70px"}
                    />
                  </div>
                  <div>
                    <span>{item.sender.user}</span>
                  </div>
                </Profile>
                <strong style={{ marginRight: "15px" }}>-</strong>
                <div>
                  <span style={{ color: item.is_read ? "" : "green" }}>
                    {item.message}
                  </span>
                </div>
              </Notification>
            </div>
          ))}
        </NotificationContainer>
      </div>
    </Container>
  );
}

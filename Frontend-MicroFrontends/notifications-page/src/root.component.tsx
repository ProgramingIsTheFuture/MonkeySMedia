import React, { useEffect, useState } from "react";
import {
  Container,
  NotificationContainer,
  ButtonDiv,
  ButtonGENERIC,
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
            <ButtonGENERIC onClick={markAsRead}>
              Marcar todos como visto
            </ButtonGENERIC>
          </ButtonDiv>
          {notifications.length === 0 ? <h2>Não tem notificações</h2> : null}
          {notifications.map((item, index) => (
            <div key={index} style={{ width: "75%" }}>
              <Notification>
                <Profile
                  onClick={() =>
                    System.import("@monkeysmedia/util-module").then((util) =>
                      util.RedirectTo(`/profile/${item.sender.user}`)
                    )
                  }
                >
                  <div>
                    <img
                      src={`${baseUrl}${item.sender.profile_image.substring(
                        1
                      )}`}
                      alt={"profile img"}
                      width={"50px"}
                      height={"50px"}
                      style={{ borderRadius: "25px" }}
                    />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <span>{item.sender.user}</span>
                  </div>
                </Profile>
                <strong style={{ marginRight: "15px" }}>-</strong>
                <div style={{ display: "flex" }}>
                  <span style={{ color: item.is_read ? "" : "green" }}>
                    {item.message}
                  </span>

                  {item.message.search("Nova Mensage de ") != -1 ? (
                    <div style={{ marginLeft: "10px" }}>
                      <ButtonGENERIC
                        onClick={() =>
                          System.import(
                            "@monkeysmedia/util-module"
                          ).then((util) =>
                            util.RedirectTo(`/chat/${item.sender.user}`)
                          )
                        }
                      >
                        Chat
                      </ButtonGENERIC>
                    </div>
                  ) : null}
                </div>
              </Notification>
            </div>
          ))}
        </NotificationContainer>
      </div>
    </Container>
  );
}

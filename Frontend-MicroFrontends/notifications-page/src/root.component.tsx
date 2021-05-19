import React, { useEffect, useState } from "react";
import { Container } from "./styles";

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
  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      util.apiGet("api/chat/mark-as-read").then((r) => setNotifications(r.data))
    );
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
        <div>
          {notifications.map((item, index) => (
            <div key={index}>
              <img
                src={`${baseUrl}${item.sender.profile_image.substring(1)}`}
                alt={"profile img"}
              />
              {item.id}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

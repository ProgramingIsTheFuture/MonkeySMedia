import React, { useEffect, useState } from "react";

const ShowNotification = (message: string) => {
  return new Notification("Nova Notificação", {
    body: message,
  });
};

const CheckPermission = (noti: () => void) => {
  if (Notification.permission === "granted") {
    noti();
  } else if (
    Notification.permission === "default" ||
    Notification.permission === "denied"
  ) {
    Notification.requestPermission().then((p) => {
      if (p === "granted") {
        noti();
      }
    });
  }
};

export default function Root(props) {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    CheckPermission(() => {});
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("auth");
    token = JSON.parse(token).token;
    setSocket(
      new WebSocket(`ws://localhost:8000/ws/notification/?token=${token}`)
    );
  }, []);

  useEffect(() => {
    if (socket) {
      socket!.onopen = function () {};

      socket!.onmessage = function (event: any) {
        CheckPermission(() => ShowNotification(JSON.parse(event.data).message));

        window.dispatchEvent(
          new CustomEvent("@monkeysmedia/notification/new", {})
        );
      };

      socket!.onclose = function (event: any) {
        console.info(event);
      };

      socket!.onerror = function (error: any) {
        console.error(error);
      };
    }
  }, [socket]);

  return <></>;
}

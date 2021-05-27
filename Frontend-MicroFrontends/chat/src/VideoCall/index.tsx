import React, { useState, useEffect } from "react";

interface Props {
  sendToUser: string;
}
const VideoCall: React.FC<Props> = ({ sendToUser }) => {
  const [socket, setSocket] = useState<WebSocket>(null);

  useEffect(() => {
    if (sendToUser !== "") {
      const token = localStorage.getItem("auth");
      let socketUrl: string;
      System.import("@monkeysmedia/util-module").then(
        (util) => (socketUrl = util.socketUrl)
      );
      const wsUrl = `${socketUrl}ws/video-chat/${sendToUser}/?token=${
        JSON.parse(token).token
      }`;
      setSocket(new WebSocket(wsUrl));
    }
  }, [sendToUser]);

  useEffect(() => {
    if (socket) {
      socket!.onopen = function () {};

      socket!.onmessage = function (e: MessageEvent) {
        console.info(e);
      };

      socket!.onclose = function (event: any) {
        console.info(event);
      };

      socket!.onerror = function (error: any) {
        console.error(error);
      };
    }
  }, [socket]);

  return <div>Hello world video call</div>;
};

export default VideoCall;

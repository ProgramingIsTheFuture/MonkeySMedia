import React, { useEffect, useState } from "react";
import { TStories } from "../Stories";

import { Container, Header, CloseLeft, Username, Image } from "./styles";

type Props = {
  storie: TStories;
};

const StorieImg: React.FC<Props> = ({ storie }) => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);

  const handleQuit = (e: Event) => {
    e.preventDefault();
    window.dispatchEvent(new Event("@monkeysmedia/stories/close-stories", {}));
  };
  return (
    <Container>
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "60px" }}>
              {baseUrl !== "" ? (
                <img
                  src={`${baseUrl}${storie.user.profile_image.substring(1)}`}
                  height={"60px"}
                  width={"60px"}
                  alt={"Profile"}
                  style={{ borderRadius: "25px" }}
                />
              ) : null}
            </div>
            <div>
              <Username>{storie.user.user}</Username>
            </div>
          </div>
          <CloseLeft onClick={handleQuit}></CloseLeft>
        </div>
      </Header>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        {storie.stories.map((i) => (
          <div key={i.id}>
            {baseUrl !== "" ? (
              <Image
                src={`${baseUrl}${i.image.substring(1)}`}
                height={"100%"}
                width={"100%"}
                alt={"storie"}
              />
            ) : null}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StorieImg;

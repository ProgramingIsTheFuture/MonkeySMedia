import React, { useEffect, useState } from "react";
import { TStories } from "../Stories";

import { Container, Header, Username, Image } from "./styles";

type Props = {
  storie: TStories;
  close: (arg0: boolean) => void;
};

const StorieImg: React.FC<Props> = ({ storie }) => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);
  return (
    <Container>
      <Header>
        <div style={{ height: "60px" }}>
          <img
            src={`${baseUrl}${storie.user.profile_image.substring(1)}`}
            height={"60px"}
            width={"60px"}
            alt={"Profile"}
            style={{ borderRadius: "25px" }}
          />
        </div>
        <div>
          <Username>{storie.user.user}</Username>
        </div>
      </Header>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        {storie.stories.map((i) => (
          <div key={i.id}>
            <Image
              src={`${baseUrl}${i.image.substring(1)}`}
              height={"100%"}
              width={"100%"}
              alt={"storie"}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StorieImg;

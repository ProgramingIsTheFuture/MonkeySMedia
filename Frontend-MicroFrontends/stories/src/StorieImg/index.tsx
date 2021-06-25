import React, { useEffect, useState } from "react";
import { TStories } from "../Stories";

import { Container, Header, CloseLeft, Username, Image } from "./styles";

type Props = {
  storie: TStories;
};

// Mileseconds
const image_time = 5000;

const StorieImg: React.FC<Props> = ({ storie }) => {
  const [baseUrl, setBaseUrl] = useState("");
  const [changeImg, setChangeImg] = useState<boolean>(true);
  const [firstT, setFirstT] = useState<boolean>(true);
  const [storiesElements, setStoriesElements] = useState<any>(null);

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);

  const ImageSlider = (i: any) => (
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
  );

  useEffect(() => {
    if (firstT === true && baseUrl !== "") {
      setTimeout(() => {
        setStoriesElements(storie.stories.map((i) => ImageSlider(i)));
        setChangeImg(!changeImg);
      }, 1);
      setFirstT(false);
    }
  }, [baseUrl]);

  useEffect(() => {
    setTimeout(() => {
      let last_one = storie.stories.pop();
      storie.stories.unshift(last_one);
      setStoriesElements(storie.stories.map((i) => ImageSlider(i)));
      setChangeImg(!changeImg);
    }, image_time);
  }, [changeImg]);

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
        {storiesElements}
      </div>
    </Container>
  );
};

export default StorieImg;

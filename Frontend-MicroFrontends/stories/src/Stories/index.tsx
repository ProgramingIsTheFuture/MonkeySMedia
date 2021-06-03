import React, { ReactElement, useEffect, useState } from "react";
import { Container, Storie } from "./styles";

type StorieInfo = {
  id: number;
  image: string;
  timestamp: string;
};

type TStories = {
  id: number;
  user: {
    id: number;
    user: string;
    first_name: string;
    last_name: string;
    profile_image: string;
  };
  stories: StorieInfo[];
};

const Stories: React.FC = (): ReactElement => {
  const [stories, setStories] = useState<TStories[]>({} as TStories[]);
  const [baseUrl, setBaseUrl] = useState<string>("");

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);
  useEffect(() => {
    setStories([
      {
        id: 1,
        user: {
          id: 1,
          user: "root",
          first_name: "",
          last_name: "",
          profile_image: "/media/default/face_img/1.svg",
        },
        stories: [
          {
            id: 1,
            image: "/media/stories_images/rootreact_gig1.png",
            timestamp: "2021-05-27T22:32:03.902155+01:00",
          },
          {
            id: 2,
            image: "/media/stories_images/roothomepage.png",
            timestamp: "2021-05-30T14:16:53.866451+01:00",
          },
          {
            id: 3,
            image: "/media/stories_images/rootaaa_gyDovOh.png",
            timestamp: "2021-05-30T14:40:42.782341+01:00",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          user: "root",
          first_name: "",
          last_name: "",
          profile_image: "/media/default/face_img/1.svg",
        },
        stories: [
          {
            id: 1,
            image: "/media/stories_images/rootreact_gig1.png",
            timestamp: "2021-05-27T22:32:03.902155+01:00",
          },
          {
            id: 2,
            image: "/media/stories_images/roothomepage.png",
            timestamp: "2021-05-30T14:16:53.866451+01:00",
          },
        ],
      },
    ]);
  }, []);

  if (Object.keys(stories).length === 0) {
    return <h3>Loading stories</h3>;
  }
  return (
    <Container>
      {stories.map((storie: TStories) => (
        <Storie key={storie.id}>
          <img
            src={`${baseUrl}${storie.user.profile_image.substring(1)}`}
            alt="profile_image"
            width={"25px"}
            height={"25px"}
          />
        </Storie>
      ))}
    </Container>
  );
};

export default Stories;

import React, { ReactElement, useEffect, useState } from "react";
import { Container } from "./styles";

import ScrollMenu from "react-horizontal-scrolling-menu";
import StorieModal from "../StorieModal";

type StorieInfo = {
  id: number;
  image: string;
  timestamp: string;
};

export type TStories = {
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
  const [selected, setSelected] = useState<string>();

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
        id: 2,
        user: {
          id: 2,
          user: "admin",
          first_name: "",
          last_name: "",
          profile_image: "/media/default/face_img/1.svg",
        },
        stories: [
          {
            id: 4,
            image: "/media/stories_images/rootreact_gig1.png",
            timestamp: "2021-05-27T22:32:03.902155+01:00",
          },
        ],
      },
    ]);
  }, []);

  const onSelect = (key) => {
    setSelected(key);
  };

  if (Object.keys(stories).length === 0) {
    return <h3>Loading stories</h3>;
  }
  return (
    <Container>
      <ScrollMenu
        data={stories.map((storie: TStories) => (
          <StorieModal key={storie.id} storie={storie}></StorieModal>
        ))}
        arrowLeft={<div>{"<"}</div>}
        arrowRight={<div>{">"}</div>}
        selected={selected}
        onSelect={onSelect}
      ></ScrollMenu>
    </Container>
  );
};

export default Stories;

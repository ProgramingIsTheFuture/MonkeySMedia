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
  const [loading, setLoading] = useState<boolean>(true);
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    System.import("@monkeysmedia/util-module")
      .then((util) => util.apiGet("/api/stories/list-stories/"))
      .then((resp: any) => {
        setStories(resp.data);
        setLoading(false);
      });
  }, []);

  const onSelect = (key: string) => {
    setSelected(key);
  };

  if (Object.keys(stories).length === 0 && loading) {
    return (
      <Container>
        <h3 style={{ textAlign: "center" }}>Loading stories</h3>
      </Container>
    );
  }

  if (Object.keys(stories).length === 0 && !loading) {
    return (
      <Container>
        <h3 style={{ textAlign: "center" }}>Não há stories novos</h3>
      </Container>
    );
  }

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Stories</h2>
      <ScrollMenu
        data={stories.map((storie: TStories) => {
          return <StorieModal key={storie.id} storie={storie}></StorieModal>;
        })}
        arrowLeft={<div>{"<"}</div>}
        arrowRight={<div>{">"}</div>}
        selected={selected}
        onSelect={onSelect}
      ></ScrollMenu>
    </Container>
  );
};

export default Stories;

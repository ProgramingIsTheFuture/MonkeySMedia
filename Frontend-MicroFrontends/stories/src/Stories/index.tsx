import React, { ReactElement, useEffect, useState } from "react";
import { Container, Form } from "./styles";

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
  const [reload, setReload] = useState<boolean>(true);
  const [img, setImg] = useState<any>();
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    if (reload) {
      System.import("@monkeysmedia/util-module")
        .then((util) => util.apiGet("/api/stories/list-stories/"))
        .then((resp: any) => {
          setStories(resp.data);
          setLoading(false);
          setReload(false);
        });
    }
  }, [reload]);

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

  const handleCreateStorie = (e: any) => {
    e.preventDefault();
    if (img) {
      const newPost = new FormData();
      newPost.append("image", img, img.name);

      System.import("@monkeysmedia/util-module")
        .then((util) => util.apiPost("api/stories/post-storie/", newPost))
        .then(() => {
          setReload(true);
          setImg(null);
        });
    }
  };

  if (Object.keys(stories).length === 0 && !loading) {
    return (
      <Container>
        <h3 style={{ textAlign: "center" }}>Não há stories novos</h3>
        <Form onSubmit={handleCreateStorie}>
          <div>
            <input
              type={"file"}
              onChange={(e: any) => setImg(e.target.files[0])}
            />
            <button type={"submit"}>Criar</button>
          </div>
        </Form>
      </Container>
    );
  }

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Stories</h2>
      <Form onSubmit={handleCreateStorie}>
        <div>
          <input
            type={"file"}
            onChange={(e: any) => setImg(e.target.files[0])}
          />
          <button type={"submit"}>Criar</button>
        </div>
      </Form>
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

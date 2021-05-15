import React, { useState, useEffect } from "react";

import Likes from "../Likes";
import DeleteBTN from "../DeleteBTN";

import {
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Container,
  UserSimpleInfo,
} from "./styles";

const Post: React.FC<any> = (props) => {
  const [baseUrl, setBaseURL] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseURL(util.baseUrl)
    );
  }, [setBaseURL]);

  useEffect(() => {
    // Getting "me" user infos
    (async () =>
      System.import("@monkeysmedia/util-module")
        .then((util) => util.apiGet("api/users/get-user/"))
        .then((resp: any) => {
          setUsername(resp.data.username ? resp.data.username : null);
        }))();
  }, [setUsername]);

  return (
    <Container ref={props.refe ? props.refe : null}>
      <UserSimpleInfo>
        <div
          onClick={() =>
            System.import("@monkeysmedia/util-module").then((util) =>
              util.RedirectTo(`/profile/${props.post.user}`)
            )
          }
        >
          <div>
            {baseUrl.length > 0 ? (
              <img
                src={`${baseUrl}${props.post.profile_image.substring(1)}`}
                width={"55px"}
                height={"55px"}
                alt={"Profile"}
              />
            ) : null}
            <div>
              <p>{props.post.user}</p>
              <p>{props.post.timestamp}</p>
            </div>
          </div>
        </div>
        <div>
          {props.post.user === username ? (
            <DeleteBTN postID={props.post.id} />
          ) : (
            <div
              style={{
                width: "25px",
                height: "25px",
              }}
            ></div>
          )}
        </div>
      </UserSimpleInfo>
      <Card>
        <CardTitle>{props.post.title}</CardTitle>
        {props.post.content ? (
          <CardContent>{props.post.content}</CardContent>
        ) : null}
        {props.post.image ? (
          <CardImage>
            {baseUrl.length > 0 ? (
              <img
                src={`${baseUrl}${props.post.image.substring(1)}`}
                alt={`${props.post.user}`}
              />
            ) : null}
          </CardImage>
        ) : null}
      </Card>
      <Likes id={props.post.id} likes={props.post.likes} />
    </Container>
  );
};

export default Post;

import React, { useState } from "react";
import api from "../../../../services";

import { Container } from "./styles";

interface Props {
  id: number;
  likes: number;
}

const Likes: React.FC<Props> = ({ likes, id }) => {
  const token: any = localStorage.getItem("auth");
  const [like, setLikes] = useState<number>(likes);
  const handleClick = () => {
    api
      .post(
        "api/posts/like-posts/",
        { id: id },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then((resp) => {
        console.log(resp);
        setLikes(like + 1);
      })
      .catch();
  };

  return <Container onClick={handleClick}>{like}</Container>;
};

export default Likes;

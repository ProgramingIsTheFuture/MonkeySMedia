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
    if (token) {
      api
        .post(
          "api/posts/like-unlike-posts/",
          { id: id },
          { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
        )
        .then((resp) => {
			console.log(resp)
			if(resp.data.like === "Removed"){
				setLikes(like - 1);
			}
			else if(resp.data.like === "Added") {
				setLikes(like + 1);
			}
        })
        .catch();
    }
  };
  return <Container onClick={handleClick}>{like}</Container>;
};

export default Likes;

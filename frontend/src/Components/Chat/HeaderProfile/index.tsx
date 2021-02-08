import React from "react";
import useSWR from "swr";
import api from "../../../services";
import { ProfileInfoTypes } from "../../../Store/types";
import { Link } from "react-router-dom";
import { Container } from "./styles";

type Props = {
  username: string;
};

const HeaderProfile: React.FC<Props> = ({ username }) => {
  const token: any = localStorage.getItem("auth");
  const fetcher = (url: string) =>
    api
      .post(
        url,
        { username: username },
        { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
      )
      .then((resp) => resp.data);
  const { data } = useSWR<ProfileInfoTypes>(
    "api/profile/get-profile/",
    fetcher
  );
  if (!data) {
    return <h3>Loading ...</h3>;
  }
  return (
    <Container>
      <Link to={`/profile/${data.user}`}>
        <div>
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}${data.profile_image}`}
            alt={"Profile"}
            height={"50px"}
            width={"50px"}
          />
        </div>
        <div>
          <div>{data.user}</div>
          <div>
            {data.first_name} {data.last_name}
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default HeaderProfile;

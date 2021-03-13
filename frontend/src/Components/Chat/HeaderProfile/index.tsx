import React, { useEffect, useState } from "react";
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

  const [data, setData] = useState<ProfileInfoTypes | null>(null);

  useEffect(() => {
    setData(null);

    (async () => {
      let profile: ProfileInfoTypes | any = await api
        .post(
          "api/profile/get-profile/",
          { username: username },
          { headers: { Authorization: `Token ${JSON.parse(token).token}` } }
        )
        .then(async (resp: any) => await resp.data);
      setData(profile);
    })();
  }, [token, username]);

  if (!data) {
    return (
      <Container>
        <h3 style={{ verticalAlign: "center" }}>Loading ...</h3>
      </Container>
    );
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

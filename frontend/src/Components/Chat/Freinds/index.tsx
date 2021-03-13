import React, { useEffect, useState } from "react";
import { Container, FreindDiv } from "./styles";
import api from "../../../services";
import { ProfileInfoTypes } from "../../../Store/types";
import { Link } from "react-router-dom";

const Freinds: React.FC = () => {
  const token: any = localStorage.getItem("auth");
  const [profiles, setProfiles] = useState<[ProfileInfoTypes] | null>(null);

  useEffect(() => {
    api
      .get(`api/profile/list-all-users-following/`, {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then((resp) => {
        setProfiles(resp.data);
      });
  }, [token]);

  if (!profiles) {
    return <h2>Loading!!!! </h2>;
  } else if (profiles!.length <= 0) {
    return (
      <Container>
        <h2>Without freinds here!</h2>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <input type={"text"} />
        {profiles!.map((item: ProfileInfoTypes) => {
          return (
            <FreindDiv key={item.id}>
              <Link to={`/chat/${item.user}`}>
                <div style={{ height: "50px" }}>
                  <img
                    src={`${process.env.REACT_APP_BACKEND_URL}${item.profile_image}`}
                    alt={"Profile"}
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div>
                  <div>
                    <span>{item.user}</span>
                  </div>
                  <div>
                    <p>
                      {item.first_name} {item.last_name}
                    </p>
                  </div>
                </div>
              </Link>
            </FreindDiv>
          );
        })}
      </div>
    </Container>
  );
};

export default Freinds;

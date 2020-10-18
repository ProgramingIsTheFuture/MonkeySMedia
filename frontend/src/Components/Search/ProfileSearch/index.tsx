import React from "react";
import { Link } from "react-router-dom";
import { ProfileInfoTypes } from "../../../Store/types";

import { Container } from "./styles";

interface Props {
  Profile: ProfileInfoTypes;
}

const ProfileSearch: React.FC<Props> = ({ Profile }) => {
  return (
        <Link to={`/Profile/${Profile.user}`} style={{textDecoration: "none"}}>
      <Container>
        <div>
          <div>
            <img
              src={Profile.profile_image}
              alt={"profile"}
              width={"30px"}
              height={"30px"}
            />
            <span>{Profile.user}</span>
          </div>
          <div>
            <p>{Profile.description}</p>
          </div>
        </div>
      </Container>
    </Link>
  );
};

export default ProfileSearch;

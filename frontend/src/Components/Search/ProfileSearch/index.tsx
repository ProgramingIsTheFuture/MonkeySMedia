import React from "react";
import { Link } from "react-router-dom";
import { ProfileInfoTypes } from "../../../Store/types";

import {
  Container,
  BackgroundImg,
  FullName,
  Username,
  ProfileDescription,
} from "./styles";

interface Props {
  Profile: ProfileInfoTypes;
}

const ProfileSearch: React.FC<Props> = ({ Profile }) => {
  return (
    <Link to={`/Profile/${Profile.user}`} style={{ textDecoration: "none" }}>
      <Container>
        <BackgroundImg>
          <img src={`${Profile.background_profile_image}`} alt={"background"} />
        </BackgroundImg>
        <div>
          <div>
            <img
              src={Profile.profile_image}
              alt={"profile"}
              width={"30px"}
              height={"30px"}
            />
          </div>
          <div>
            <div>
              <FullName>
                <h2>
                  {Profile.first_name} {Profile.last_name}
                </h2>
              </FullName>
            </div>
            <div>
              <Username>
                <h4>{Profile.user}</h4>

                <div>
                  {/* <button></button> */}
                  {/* <FollowBtn></FollowBtn> */}
                </div>
              </Username>
            </div>
            <div>
              <ProfileDescription>
                <p>{Profile.description}</p>
              </ProfileDescription>
            </div>
          </div>
        </div>
      </Container>
    </Link>
  );
};

export default ProfileSearch;

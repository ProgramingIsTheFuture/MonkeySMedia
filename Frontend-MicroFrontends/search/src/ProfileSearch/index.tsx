import React from "react";

import {
  Container,
  BackgroundImg,
  FullName,
  Username,
  ProfileDescription,
} from "./styles";

interface Props {
  Profile: {
    id: number;
    user: string;
    first_name: string;
    last_name: string;
    profile_image: string;
    background_profile_image: string;
    description: string;
    following: number;
    followers: number;
  };
}

const ProfileSearch: React.FC<Props> = ({ Profile }) => {
  return (
    <a href={`/Profile/${Profile.user}`} style={{ textDecoration: "none" }}>
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
                  {/* <FollowingBTN username={Profile.user}></FollowingBTN> */}
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
    </a>
  );
};

export default ProfileSearch;

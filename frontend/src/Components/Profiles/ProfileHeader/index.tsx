import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../services";
import { ProfileInfoTypes } from "../../../Store/types";
import FollowingBTN from "../../GeralComponent/FollowingBTN";
import EditProfile from "../EditProfile";

import {
  Container,
  NavFixed,
  BackIcon,
  BackgroundImage,
  SectionImgFollow,
  Image,
  FollowsSection,
  Username,
  User,
  Description,
  LeftButtons,
} from "./styles";

const ProfileHeader: React.FC = () => {
  const token: any = localStorage.getItem("auth");
  const ProfileInfo: ProfileInfoTypes = useStoreState(
    (state: any) => state.Profile.ProfileInfo
  );
  const currentUser = useStoreState((state: any) => state.User.username);
  const setUsername = useStoreActions((action: any) => action.User.setUsername);

  useEffect(() => {
    api
      .get("api/users/get-user/", {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then((resp: any) => {
        const user = resp.data.username;
        setUsername(user ? user : null);
      });
  }, [token, setUsername]);

  return (
    <>
      <NavFixed>
        <Link to="/">
          <BackIcon />
        </Link>
      </NavFixed>
      <Container>
        <BackgroundImage>
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}${ProfileInfo.background_profile_image}`}
            alt="Background"
          />
        </BackgroundImage>
        <SectionImgFollow>
          <Image>
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}${ProfileInfo.profile_image}`}
              alt={`${ProfileInfo.user} Profile`}
            />
          </Image>
          <FollowsSection>
            <p>
              <span>Followers - {ProfileInfo.followers} </span>
              <span> Following - {ProfileInfo.following}</span>
            </p>
          </FollowsSection>
        </SectionImgFollow>
        <div>
          <Username>
            {ProfileInfo.first_name} {ProfileInfo.last_name}
          </Username>
          <User>{ProfileInfo.user}</User>
          <Description>{ProfileInfo.description}</Description>
          <LeftButtons>
            {currentUser !== ProfileInfo.user ? (
              <FollowingBTN username={ProfileInfo.user} />
            ) : <EditProfile />}
          </LeftButtons>
        </div>
      </Container>
    </>
  );
};

export default ProfileHeader;

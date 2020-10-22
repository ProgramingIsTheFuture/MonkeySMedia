import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../services";
import { ProfileInfoTypes } from "../../../Store/types";
import ChatBTN from "../../GeralComponent/ChatBTN";
import FollowingBTN from "../../GeralComponent/FollowingBTN";
import EditProfile from "../EditProfile";

import {
  NavFixed,
  Container,
  Container2,
  Container3,
  BackIcon,
  BackgroundImage,
  ProfileImage,
  InfoSection,
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
        <Container2>
          <ProfileImage>
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}${ProfileInfo.profile_image}`}
              alt={`${ProfileInfo.user} Profile`}
            />
          </ProfileImage>
          <Container3>
            <InfoSection>
              <Username>
                {ProfileInfo.first_name} {ProfileInfo.last_name}
              </Username>
            </InfoSection>
            <LeftButtons>
              {currentUser !== ProfileInfo.user ? (
                <FollowingBTN username={ProfileInfo.user} />
              ) : (
                <EditProfile />
              )}
              {currentUser !== ProfileInfo.user ? <ChatBTN /> : null}
            </LeftButtons>
          </Container3>
          <div>
            <User>{ProfileInfo.user}</User>
            <Description>{ProfileInfo.description}</Description>
          </div>
        </Container2>
        <FollowsSection>
          <p>
            <span>Followers - {ProfileInfo.followers} </span>
            <span> Following - {ProfileInfo.following}</span>
          </p>
        </FollowsSection>
      </Container>
    </>
  );
};

export default ProfileHeader;

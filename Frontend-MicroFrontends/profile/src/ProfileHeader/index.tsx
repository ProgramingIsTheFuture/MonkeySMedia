import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EditProfile from "../EditProfile";
import EditModal from "../EditModal";

import {
  Container,
  NavFixed,
  BackIcon,
  BackgroundImage,
  PersonalInfos,
  ProfileImage,
} from "./styles";

type Props = { username: string };

const ProfileHeader: React.FC<Props> = ({ username }) => {
  const historyRouter = useHistory();
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [profile, setProfile] = useState<any>(null);
  const [isModal, setIsModal] = useState<boolean>(false);

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);

  useEffect(() => {
    // Getting the Profile info
    if (typeof username === "string" && username !== "") {
      System.import("@monkeysmedia/util-module")
        .then((util) =>
          util.apiPost("api/profile/get-profile/", {
            username: username,
          })
        )
        .then((resp) => {
          setProfile(resp.data);
        })
        .catch(() => {
          historyRouter.push("/");
        });
    }
  }, [username, historyRouter]);

  if (!profile) {
    return <h1>Loading</h1>;
  }

  const callBack = (val: boolean) => {
    setIsModal(val);
  };

  return (
    <Container>
      <header style={{ border: "1px solid var(--shadow)" }}>
        <NavFixed>
          <div>
            <BackIcon onClick={() => history.back()} />
          </div>
        </NavFixed>
        <BackgroundImage>
          {baseUrl ? (
            <img
              src={`${baseUrl}${profile.background_profile_image.substring(1)}`}
              alt="Background"
            />
          ) : null}
        </BackgroundImage>
        <PersonalInfos>
          <ProfileImage>
            {baseUrl ? (
              <img
                src={`${baseUrl}${profile.profile_image.substring(1)}`}
                alt={`${profile.user} Profile`}
                width={"200px"}
                height={"200px"}
              />
            ) : null}
          </ProfileImage>
          <div>
            <h2>
              {profile.user}
              {username !== profile.user ? (
                // <FollowingBTN username={profile.user} />
                <h1>aaha</h1>
              ) : (
                <EditProfile callBack={callBack} />
              )}
              {/*
              {currentUser !== profile.user ? <ChatBTN /> : null}
			  */}
            </h2>
            <p>
              {profile.first_name} {profile.last_name}
            </p>

            <p>{profile.description}</p>
            <ul className="flex-menu">
              <li>
                <strong>{profile.followers}</strong> followers
              </li>
              <li>
                <strong>{profile.following}</strong> following
              </li>
            </ul>
          </div>
        </PersonalInfos>
      </header>
      <EditModal callBack={callBack} isModal={isModal} />
    </Container>
  );
};

export default ProfileHeader;

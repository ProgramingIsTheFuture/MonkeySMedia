import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EditProfile from "../EditProfile";
import EditModal from "../EditModal";
import ChatBTN from "../ChatBTN";
import FollowingBTN from "../FollowingBTN";

import {
  Container,
  NavFixed,
  BackIcon,
  BackgroundImage,
  PersonalInfos,
  ProfileImage,
} from "./styles";

interface ProfileInfoTypes {
  id: number;
  user: string;
  first_name: string;
  last_name: string;
  profile_image: string;
  background_profile_image: string;
  description: string;
  following: number;
  followers: number;
}

type Props = { username: string };

const ProfileHeader: React.FC<Props> = ({ username }) => {
  const historyRouter = useHistory();
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [profile, setProfile] = useState<ProfileInfoTypes>(null);
  const [me, setMe] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);
  const [newFollowers, setNewFollowers] = useState<number>(0);

  window.addEventListener("@monkeysmedia/profile-follow-unfollow", (e: any) => {
    if (profile) {
      setNewFollowers(e.detail.follow);
    }
  });

  useEffect(() => {
    if (profile && newFollowers != 0) {
      profile.followers += newFollowers;
      setProfile(profile);
    }
  }, [newFollowers, profile]);

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      util
        .apiGet("api/users/get-user/")
        .then((data: any) => setMe(data.data.username))
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
              style={{ width: "100%" }}
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
          <div style={{ marginLeft: "25px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: "60px",
              }}
            >
              <h2>{profile.user}</h2>
              {me !== profile.user ? (
                <FollowingBTN username={profile.user} />
              ) : (
                <EditProfile callBack={callBack} />
              )}
              {me !== profile.user ? <ChatBTN username={profile.user} /> : null}
            </div>
            <p>
              {profile.first_name} {profile.last_name}
            </p>
            <div>
              <p style={{ fontSize: "1.5rem" }}>{profile.description}</p>
            </div>
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
      <EditModal
        callBack={callBack}
        setProfile={setProfile}
        isModal={isModal}
        profile={profile}
      />
    </Container>
  );
};

export default ProfileHeader;

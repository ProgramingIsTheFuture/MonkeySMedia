import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../services";
import { ProfileInfoTypes } from "../../../Store/types";

import {
  Container,
  NavItems,
  ProfileImage,
  HomeIcon,
  ChatIcon,
  SearchLink,
  SearchIcon,
  DropDown,
  DropDownIcon,
  DropDownItems,
} from "./styles";

const Navbar: React.FC = () => {
  const token: any = localStorage.getItem("auth");
  const ProfileInfo: ProfileInfoTypes = useStoreState(
    (state: any) => state.Profile.ProfileInfo
  );
  const getProfileInfo = useStoreActions(
    (action: any) => action.Profile.getProfileInfo
  );
  const username = useStoreState((state: any) => state.User.username);
  const setUsername = useStoreActions((action: any) => action.User.setUsername)

  useEffect(() => {
    if (typeof username === "string" && username !== "") {
      api
        .post(
          "api/profile/get-profile/",
          { username: username },
          {
            headers: { Authorization: `Token ${JSON.parse(token).token}` },
          }
        )
        .then((resp) => {
          getProfileInfo(resp.data);
        })
        .catch((err) => console.log(err));
    }
  }, [username, getProfileInfo, token]);

  useEffect(() => {
    api
        .get('api/users/get-user/',
        {
          headers: { Authorization: `Token ${JSON.parse(token).token}` }
        }
      ).then((resp) => {
        setUsername(resp.data.username);
    });
  })

  const logOut = () => {
    api
      .get("api/users/logout/", {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then()
      .catch();
    localStorage.removeItem("auth");
  };

  return (
    <Container>
      <NavItems>
        <li>Lgo</li>
        <ProfileImage>
          <Link to={`/Profile/${username}`}>
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}${ProfileInfo.profile_image}`}
              alt={"Profile"}
            />
          </Link>
        </ProfileImage>
        <li>
          <Link to={"/"}>
            <HomeIcon />
          </Link>
        </li>
        <li>
          <ChatIcon />
        </li>

        <SearchLink>
          <Link to="/search/">
            <SearchIcon />
          </Link>
        </SearchLink>
        <DropDown>
          <DropDownIcon></DropDownIcon>
          <DropDownItems>
            <li>
              <Link to="/login/" onClick={logOut}>
                Logout
              </Link>
            </li>
            <li>
              <Link to="/settings/">Settings</Link>
            </li>
          </DropDownItems>
        </DropDown>
      </NavItems>
    </Container>
  );
};

export default Navbar;

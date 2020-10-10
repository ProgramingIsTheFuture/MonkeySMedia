import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../services";

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
  const ProfileInfo = useStoreState((state: any) => state.Profile.ProfileInfo);
  const getProfileInfo = useStoreActions(
    (action: any) => action.Profile.getProfileInfo
  );
  const username = useStoreState((state: any) => state.User.username);

  useEffect(() => {
    if (typeof username === "string" && username !== "") {
      api
        .post(
          "api/profile/get-me/",
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

  const logOut = () => {
    localStorage.removeItem("auth");
  };

  return (
    <Container>
      <NavItems>
        <li>Lgo</li>
        <ProfileImage>
          <Link to={`/Profile/${username}`}>
            <img
              src={`http://localhost:8000${ProfileInfo.profile_image}`}
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
          <div>
            <DropDownItems>
              <li>
                <Link to="/login/" onClick={logOut}>
                  Logout
                </Link>
              </li>
            </DropDownItems>
          </div>
        </DropDown>
      </NavItems>
    </Container>
  );
};

export default Navbar;

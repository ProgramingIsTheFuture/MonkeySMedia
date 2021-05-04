import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

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
  console.log(token);
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    let util: any = System.import("@monkeysmedia/util-module");
    util.then((uti) => setBaseUrl(uti.baseUrl));
  }, []);

  useEffect(() => {
    if (typeof username === "string" && username !== "") {
      System.import("@monkeysmedia/util-module")
        .then((api) =>
          api.apiPost("api/profile/get-profile/", { username: username })
        )
        .then((resp) => {
          console.log(resp);
          setProfileImage(resp.data.profile_image.substring(1));
        })
        .catch((err) => console.log(err));
    }
  }, [username, token]);

  useEffect(() => {
    System.import("@monkeysmedia/util-module")
      .then((apiG) => apiG.apiGet("api/users/get-user/"))
      .then((resp) => {
        setUsername(resp.data.username);
      });
  });

  const logOut = () => {
    System.import("@monkeysmedia/util-module")
      .then((util) => util.apiGet("api/users/logout/"))
      .then()
      .catch();
    localStorage.removeItem("auth");
  };

  return (
    <Container>
      <NavItems>
        <li>Lgo</li>
        <ProfileImage>
          <a href={`/profile/${username}`}>
            <img src={`${baseUrl}${profileImage}`} alt={"Profile"} />
          </a>
        </ProfileImage>
        <li>
          <a href={"/"}>
            <HomeIcon />
          </a>
        </li>
        <li>
          <a href={"/chat/"}>
            <ChatIcon />
          </a>
        </li>
        <SearchLink>
          <a href="/search/">
            <SearchIcon />
          </a>
        </SearchLink>

        <DropDown>
          <motion.div
            initial={{ scale: 1.1, rotate: 180 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
          >
            <DropDownIcon></DropDownIcon>
            <DropDownItems>
              <li>
                <a href="/settings/">Settings</a>
              </li>
              <li>
                <a href="/login/" onClick={logOut}>
                  Logout
                </a>
              </li>
            </DropDownItems>
          </motion.div>
        </DropDown>
      </NavItems>
    </Container>
  );
};

export default Navbar;

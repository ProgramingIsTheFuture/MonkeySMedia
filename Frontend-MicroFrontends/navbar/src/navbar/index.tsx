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
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);

  useEffect(() => {
    if (typeof username === "string" && username !== "") {
      System.import("@monkeysmedia/util-module")
        .then((api) =>
          api.apiPost("api/profile/get-profile/", { username: username })
        )
        .then((resp) => {
          setProfileImage(resp.data.profile_image.substring(1));
        })
        .catch((err) => console.error(err));
    }
  }, [username]);

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
          <div
            onClick={() =>
              System.import("@monkeysmedia/util-module").then((util) =>
                util.RedirectTo(`/profile/${username}`)
              )
            }
          >
            <img src={`${baseUrl}${profileImage}`} alt={"Profile"} />
          </div>
        </ProfileImage>
        <li>
          <div
            onClick={() =>
              System.import("@monkeysmedia/util-module").then((util) =>
                util.RedirectTo("/")
              )
            }
          >
            <HomeIcon />
          </div>
        </li>
        <li>
          <div
            onClick={() =>
              System.import("@monkeysmedia/util-module").then((util) =>
                util.RedirectTo("/chat/")
              )
            }
          >
            <ChatIcon />
          </div>
        </li>
        <SearchLink>
          <div
            onClick={() =>
              System.import("@monkeysmedia/util-module").then((util) =>
                util.RedirectTo("/search/")
              )
            }
          >
            <SearchIcon />
          </div>
        </SearchLink>

        <DropDown>
          <motion.div
            initial={{ scale: 1.1, rotate: 180 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
          >
            <DropDownIcon></DropDownIcon>
            <DropDownItems>
              <li>
                <div
                  onClick={() =>
                    System.import("@monkeysmedia/util-module").then((util) =>
                      util.RedirectTo("/settings/")
                    )
                  }
                >
                  Settings
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    logOut();
                    System.import("@monkeysmedia/util-module").then((util) =>
                      util.RedirectTo("/login/")
                    );
                  }}
                >
                  Logout
                </div>
              </li>
            </DropDownItems>
          </motion.div>
        </DropDown>
      </NavItems>
    </Container>
  );
};

export default Navbar;

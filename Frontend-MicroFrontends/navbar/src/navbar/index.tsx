import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import {
  Container,
  NavItems,
  ProfileImage,
  HomeIcon,
  ChatIcon,
  NotificationCounter,
  NotificationIcon,
  SearchLink,
  SearchIcon,
  DropDown,
  DropDownIcon,
  DropDownItems,
} from "./styles";

const Navbar: React.FC = () => {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [notifications, setNotifications] = useState<number>(0);

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);

  window.addEventListener("@monkeysmedia/notification/new", () => {
    setNotifications(notifications + 1);
  });

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      util
        .apiGet("api/chat/list-notifications")
        .then((r: any) =>
          setNotifications(
            r.data.filter((i: any) => i.is_read === false).length
          )
        )
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
                util.RedirectTo("/chat/")
              )
            }
          >
            <ChatIcon />
          </div>
        </li>
        <li>
          <div
            onClick={() =>
              System.import("@monkeysmedia/util-module").then((util) =>
                util.RedirectTo("/notifications/")
              )
            }
            style={{ position: "relative" }}
          >
            <NotificationCounter notifications={notifications}>
              <span>{notifications === 0 ? null : notifications}</span>
            </NotificationCounter>
            <NotificationIcon />
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

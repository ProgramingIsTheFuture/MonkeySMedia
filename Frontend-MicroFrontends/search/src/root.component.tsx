import React, { useState } from "react";
import { motion } from "framer-motion";
import PostSearch from "./PostSearch";
import ProfileSearch from "./ProfileSearch";

import { Container, BackArrow, BackIcon, SearchedItems } from "./styles";

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

interface PostType {
  id: number;
  user: string;
  title?: string;
  content?: string;
  image?: string;
  profile_image: string;
  likes: number;
  timestamp: string;
}

export default function Root(props) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [postResponse, setPostResponse] = useState<any>([]);
  const [profileResponse, setProfileResponse] = useState<any>([]);

  const SearchOnChange = (event: any) => {
    setSearchValue(event.target.value);

    System.import("@monkeysmedia/util-module")
      .then((util) =>
        util.apiGet(`api/posts/search-user-post?search=${searchValue}`, false)
      )
      .then((resp: any) => {
        setPostResponse(resp.data);
      })
      .catch((e: Error) => {});

    System.import("@monkeysmedia/util-module")
      .then((util) =>
        util.apiGet(`api/profile/search-profile?search=${searchValue}`, false)
      )
      .then((resp) => {
        setProfileResponse(resp.data);
      })
      .catch((e: Error) => {});
  };

  return (
    <Container>
      <BackArrow>
        <a href={"/"}>
          <BackIcon />
        </a>
      </BackArrow>
      <div>
        <form>
          <img src="" alt="" />
          <div>
            <input type={"text"} onChange={SearchOnChange} />
          </div>
          <img src="" alt="" />
        </form>
        <SearchedItems>
          {postResponse.map((item: PostType) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className={"posts"}
              style={{ width: "100%" }}
              key={item.id}
            >
              <PostSearch post={item} />
            </motion.div>
          ))}
          {profileResponse.map((item: ProfileInfoTypes) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              style={{ width: "100%" }}
              key={item.id}
            >
              <ProfileSearch Profile={item} />
            </motion.div>
          ))}
        </SearchedItems>
      </div>
    </Container>
  );
}

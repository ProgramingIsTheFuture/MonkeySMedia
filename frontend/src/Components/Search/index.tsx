import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import api from "../../services";
import { PostType, ProfileInfoTypes } from "../../Store/types";
import { BackIcon } from "../Profiles/ProfileHeader/styles";
import PostSearch from "./PostSearch";
import ProfileSearch from "./ProfileSearch";
import axios from "axios";

import { Container, BackArrow, SearchedItems } from "./styles";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [postResponse, setPostResponse] = useState<any>([]);
  const [profileResponse, setProfileResponse] = useState<any>([]);
  const token: any = localStorage.getItem("auth");
  let canc: any;

  const SearchOnChange = async (event: any) => {
    await setSearchValue(event.target.value);
    await api
      .get(`api/posts/search-user-post?search=${searchValue}`, {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
        cancelToken: new axios.CancelToken((c) => (canc = c)),
      })
      .then(async (resp) => {
        await setPostResponse(resp.data);
      })
      .catch((e) => {
        if (axios.isCancel(e)) console.log(e);
      });
    canc();
    await api
      .get(`api/profile/search-profile?search=${searchValue}`, {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
        cancelToken: new axios.CancelToken((c) => (canc = c)),
      })
      .then(async (resp) => {
        await setProfileResponse(resp.data);
      })
      .catch((e) => {
        if (axios.isCancel(e)) console.log(e);
      });
  };

  return (
    <Container>
      <BackArrow>
        <Link to={"/"}>
          <BackIcon />
        </Link>
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
            >
              <PostSearch key={item.id} post={item} />
            </motion.div>
          ))}
          <div>
            {profileResponse.map((item: ProfileInfoTypes) => (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <ProfileSearch key={item.id} Profile={item} />
              </motion.div>
            ))}
          </div>
        </SearchedItems>
      </div>
    </Container>
  );
};

export default Search;

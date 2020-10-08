import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services";
import { BackIcon } from "../Profiles/ProfileHeader/styles";
import PostSearch from "./PostSearch";
import ProfileSearch from "./ProfileSearch";

import { Container, BackArrow } from "./styles";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [postResponse, setPostResponse] = useState<any>([]);
  const [profileResponse, setProfileResponse] = useState<any>([]);

  const SearchOnChange = async (event: any) => {
    await setSearchValue(event.target.value);
    await api
      .get(`api/posts/search-user-post?search=${searchValue}`)
      .then(async (resp) => {
        await setPostResponse(resp.data);
      });
    await api
      .get(`api/profile/search-profile?search=${searchValue}`)
      .then(async (resp) => {
        await setProfileResponse(resp.data);
      });
  };

  return (
    <Container>
      <BackArrow>
        <Link to="/">
          <BackIcon />
        </Link>
      </BackArrow>
      <div>
        <div>
          <input type={"text"} onChange={SearchOnChange} />
        </div>
        {postResponse.map((item: any) => (
          <div>
            <PostSearch key={item.id} post={item} />
          </div>
        ))}
        {profileResponse.map((item: any) => (
          <ProfileSearch key={item.id} Profile={item}></ProfileSearch>
        ))}
      </div>
    </Container>
  );
};

export default Search;

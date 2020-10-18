import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services";
import { BackIcon } from "../Profiles/ProfileHeader/styles";
import PostSearch from "./PostSearch";
import ProfileSearch from "./ProfileSearch";

import { Container, BackArrow, SearchedItems } from "./styles";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [postResponse, setPostResponse] = useState<any>([]);
  const [profileResponse, setProfileResponse] = useState<any>([]);
  const token: any = localStorage.getItem("auth");

  const SearchOnChange = async (event: any) => {
    await setSearchValue(event.target.value);
    await api
      .get(`api/posts/search-user-post?search=${searchValue}`, {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then(async (resp) => {
        await setPostResponse(resp.data);
      });
    await api
      .get(`api/profile/search-profile?search=${searchValue}`, {
        headers: { Authorization: `Token ${JSON.parse(token).token}` },
      })
      .then(async (resp) => {
        await setProfileResponse(resp.data);
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
          <img src="" alt=""/>
          <div>
            <input type={"text"} onChange={SearchOnChange} />
          </div>
          <img src="" alt=""/>
        </form>
        <SearchedItems>
          <div>
            {postResponse.map((item: any) => (
              <PostSearch key={item.id} post={item} />
            ))}
          </div>
          <div>
            {profileResponse.map((item: any) => (
              <ProfileSearch key={item.id} Profile={item} />
            ))}
          </div>
        </SearchedItems>
      </div>
    </Container>
  );
};

export default Search;

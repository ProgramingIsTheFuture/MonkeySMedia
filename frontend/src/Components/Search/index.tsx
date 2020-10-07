import React, { useState } from "react";
import api from "../../services";

import { Container } from "./styles";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [postResponse, setPostResponse] = useState<any>([]);
  const [profileResponse, setProfileResponse] = useState<any>([]);

  const SearchOnChange = (event: any) => {
    setSearchValue(event.target.value);
    api.get(`api/posts/search-user-post?search=${searchValue}`).then((resp) => {
      setPostResponse(resp.data);
    });
    api.get(`api/profile/search-profile?search=${searchValue}`).then((resp) => {
      setProfileResponse(resp.data);
      console.log(resp.data);
    });
  };

  return (
    <Container>
      <input type={"text"} onChange={SearchOnChange} />
      {postResponse.map((item: any) => (
        <li key={item.id}>
          {item.user} - {item.title}
        </li>
      ))}
      {profileResponse.map((item: any) => (
        <li key={item.id}>{item.user}</li>
      ))}
    </Container>
  );
};

export default Search;

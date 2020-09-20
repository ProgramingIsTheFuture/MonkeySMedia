import React from "react";

import { Container, NavItems, HomeIcon, ChatIcon, SearchIcon } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavItems>
        <li>Lgo</li>
        <li>Profile</li>
        <li>
          <HomeIcon />
        </li>
        <li>
          <ChatIcon />
        </li>
        <li>
          <SearchIcon />
        </li>
      </NavItems>
    </Container>
  );
};

export default Navbar;

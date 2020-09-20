import styled from "styled-components";
import { Home } from "@styled-icons/heroicons-outline";
import { Search } from "@styled-icons/boxicons-regular";
import { ChatDotsFill } from "@styled-icons/bootstrap";

export const Container = styled.nav`
  background: var(--nav-color);

  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 50px;
`;

export const NavItems = styled.ul`
  list-style: none;

  & li {
    display: inline;
    color: var(--white);

    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const HomeIcon = styled(Home)`
  width: 25px;
  height: 25px;
`;

export const ChatIcon = styled(ChatDotsFill)`
  width: 25px;
  height: 25px;
`;

export const SearchIcon = styled(Search)`
  width: 25px;
  height: 25px;
`;

import styled from "styled-components";
import { Home } from "@styled-icons/heroicons-outline";
import { Search } from "@styled-icons/boxicons-regular";
import { ChatDotsFill } from "@styled-icons/bootstrap";
import { CaretDown } from "styled-icons/boxicons-regular";

export const Container = styled.nav`
  background: var(--nav-color);

  width: 100%;
  display: flex;

  text-align: center;
  justify-content: center;

  height: 50px;

  font-size: 0.95rem;
`;

export const NavItems = styled.ul`
  list-style: none;

  & li {
    display: inline-block;
    color: var(--white);

    margin-right: 10px;
    margin-left: 10px;

    width: 25px;
    height: 25px;
  }
`;

export const ProfileImage = styled.li`
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

export const HomeIcon = styled(Home)`
  width: 100%;
  height: 100%;

  color: white;
`;

export const ChatIcon = styled(ChatDotsFill)`
  width: 100%;
  height: 100%;
`;

export const SearchLink = styled.li`
  width: 100%;
  height: 100%;

  & a {
    color: white;
    text-decoration: none;
  }
`;

export const SearchIcon = styled(Search)`
  width: 100%;
  height: 100%;
`;

export const DropDown = styled.li`
  width: 100%;
  height: 100%;

  cursor: pointer;
  position: relative;

  div {
    display: none;
    visibility: hidden;
  }
  :hover {
    div {
      display: block;
      visibility: visible;
      width: 80px;
      height: 80px;
    }
  }
`;

export const DropDownIcon = styled(CaretDown)`
  width: 100%;
  height: 100%;
`;

export const DropDownItems = styled.ul`
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  background-color: var(--nav-color);
  display: flex;
  flex-direction: column;

  min-width: 50px;
  min-height: 50px;

  justify-content: center;
  z-index: 999;

  margin-top: -5px;

  li {
    color: var(--white);
    text-align: center;
    
    width: 6em;
    padding: 0.5em;

    text-align: center;
    margin: .1em 0;
    
    z-index: 2;

    a {
      padding: 0.5em;

      text-decoration: none;
      color: var(--white);

      :hover {
        transition: 0.5s;
        background: var(--card);
      }
    }
  }
`;

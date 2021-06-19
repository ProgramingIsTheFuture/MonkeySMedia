import styled from "styled-components";
import { Home } from "@styled-icons/heroicons-outline";
import { Search } from "@styled-icons/boxicons-regular";
import { ChatDotsFill } from "@styled-icons/bootstrap";
import { CaretDown } from "styled-icons/boxicons-regular";
import { NotificationsActive } from "styled-icons/material-twotone";

export const Container = styled.nav`
  background: var(--nav-color);

  width: 100%;
  display: flex;

  text-align: center;
  justify-content: center;

  height: 65px;
  font-size: 0.95rem;
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  li {
    display: inline-block;
    color: var(--white);

    margin-right: 2vw;
    margin-left: 2vw;

    width: 40px;
    height: 40px;

    div {
      color: var(--white);
      cursor: pointer;
    }
  }
`;

export const ProfileImage = styled.li`
  width: 100%;
  height: 100%;

  img {
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

interface Props {
  notifications: number;
}
export const NotificationCounter = styled.div<Props>`
  ${(props) => (props.notifications === 0 ? "display : none;" : null)}
  position: absolute;

  right: 0;
  top: 0;

  width: 15px;
  height: 15px;

  background-color: white;
  border-radius: 25px;

  span {
    color: red !important;
  }
`;

export const NotificationIcon = styled(NotificationsActive)`
  width: 100%;
  height: 100%;
`;

export const SearchLink = styled.li`
  width: 100%;
  height: 100%;

  div {
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

  ul {
    display: none;
    visibility: hidden;
  }
  :hover {
    ul {
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

  transform: rotate(180deg);
`;

export const DropDownItems = styled.ul`
  position: absolute;
  display: block;

  top: 27px;
  left: 0;

  background-color: var(--nav-color);
  box-shadow: 0px 8px 16px 0px var(--shadow);

  width: 50px;
  transition: 0.5s;

  list-style: none;
  z-index: 4;

  cursor: auto;

  li {
    color: var(--white);
    text-align: center;

    width: 100%;
    padding: 0.5em;

    text-align: center;
    margin: 0.1em 0;

    margin-left: -50px;
    z-index: 5;

    div {
      padding: 0.5em;

      text-decoration: none;
      color: var(--white);
      cursor: pointer;

      :hover {
        transition: 0.5s;
        background: var(--card);
      }
    }
  }
`;

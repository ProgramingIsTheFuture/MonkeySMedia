import styled from "styled-components";
import { ArrowBack } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: var(--nav-color);

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }

  .flex-menu {
    display: flex;
    list-style: none;
    margin-left: -40px;
  }
  .flex-menu li:not(:last-child) {
    margin-right: 40px;
  }
`;

export const NavFixed = styled.nav``;

export const BackIcon = styled(ArrowBack)`
  height: 50px;
  width: 50px;
  color: var(--shadow);
`;

export const BackgroundImage = styled.div`
  width: 100vw;

  img {
    width: 100%;
    height: 100%;
    min-height: 150px;

    object-fit: cover;
    image-rendering: auto;
  }

 
  @media screen and (max-width: 500px) {
    img {
	  object-fit: fill;
	}
  } 
`;

export const PersonalInfos = styled.div`
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);

  @media screen and (max-width: 446px) {
    margin-top: -105px;
  }
`;

export const ProfileImage = styled.div`
  margin-right: 25px;
  align-self: center;
  img {
    max-height: 100%;
    max-width: 100%;

    object-fit: cover;
    image-rendering: auto;

    border-radius: 100%;
    border: 1px solid black;
    box-shadow: 0 5px 8px 0 var(--shadow), 0 6px 20px 0 var(--shadow);
  }
  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

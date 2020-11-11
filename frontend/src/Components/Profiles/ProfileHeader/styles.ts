import styled from "styled-components";
import { ArrowBack } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  background-color: var(--nav-color);

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
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
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    min-height: 150px;

    object-fit: cover;
    image-rendering: auto;
  }
`;

export const PersonalInfos = styled.div`
`;

export const ProfileImage = styled.div`
  height: 225px;
  width: 225px;

  img {
    max-height: 100%;
    max-width: 100%;

    object-fit: cover;
    image-rendering: auto;

    border-radius: 100%;
    border: 1px solid black;
    box-shadow: 0 5px 8px 0 var(--shadow), 0 6px 20px 0 var(--shadow);
  }
`;

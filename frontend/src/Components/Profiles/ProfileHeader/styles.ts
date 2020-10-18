import styled from "styled-components";
import { ArrowBack } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  background: var(--card);
  /* background: linear-gradient(
    to bottom,
    rgba(152, 101, 45, 1) 24%,
    rgba(129, 71, 21, 1) 90%
  ); */
  margin-top: 50px;

  height: 500px;
  width: 100%;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

export const NavFixed = styled.nav`
  position: fixed;

  height: 50px;
  width: 100%;

  background-color: var(--nav-color);
  z-index: 999;
`;

export const BackIcon = styled(ArrowBack)`
  top: 0;
  left: 0;

  width: 50px;
  height: 50px;

  color: #000;
`;

export const BackgroundImage = styled.div`
  width: 100vw;
  height: 280px;

  & img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    image-rendering: auto;
  }
`;

export const SectionImgFollow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 52px;

  /* width: 300px;
  height: 300px; */
`;

export const Image = styled.div`
  position: relative;
  height: 225px;
  width: 225px;

  margin-top: -115px;
  & img {
    position: absolute;
    height: 100%;
    width: 100%;

    object-fit: cover;
    image-rendering: auto;

    border-radius: 100%;
    border: 1px solid black;
  }
`;

export const FollowsSection = styled.div`
  width: 100%;
  p {
    span {
      margin: 10px;
    }
  }
`;

export const Username = styled.div`
  margin-top: -165px;

  text-align: center;
  font-size: 3.2rem;
`;

export const User = styled.div`
  text-align: center;
  font-size: 2.2rem;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

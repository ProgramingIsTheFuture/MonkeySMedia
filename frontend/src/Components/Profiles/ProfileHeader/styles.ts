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

  min-height: 450px;
  width: 100vw;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

export const Container2 = styled.div`
  margin-left: 15px;
  margin-top: -113px;

  display: flex;
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  width: calc(100vw - 15px);
`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;

  width: 82%;
  justify-content: space-between;

  div {
    text-align: center;
  }
`;

export const NavFixed = styled.nav`
  position: fixed;

  height: 50px;
  width: 100vw;

  background-color: var(--nav-color);
  z-index: 0;
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
  max-height: 280px;

  img {
    width: 100%;
    height: 100%;
    min-height: 150px;

    object-fit: cover;
    image-rendering: auto;
  }
`;

export const ProfileImage = styled.div`
  max-height: 225px;
  max-width: 225px;

  img {
    height: 100%;
    width: 100%;

    object-fit: cover;
    image-rendering: auto;

    border-radius: 100%;
    border: 1px solid black;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: row;
  text-align: center;
  width: 100%;
`;

export const FollowsSection = styled.div`
  min-width: 100px;
  display: flex;

  flex-direction: row;
  justify-content: flex-start;

  flex-wrap: wrap;
  p {
    span {
      margin: 10px;
    }
  }
`;

export const Username = styled.div`
  text-align: center;
  font-size: 3.2rem;
`;

export const User = styled.div`
  text-align: center;
  font-size: 2.2rem;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin: 5px;
`;

export const LeftButtons = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;
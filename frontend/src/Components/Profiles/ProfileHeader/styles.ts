import styled from "styled-components";
import { ArrowBack } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  background: var(--card);

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
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  justify-content: center;
  width: 100vw;
`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  justify-content: center;

  margin-top: -9%;
`;

export const Container4 = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: row;
  flex-wrap: wrap;

  text-align: center;
  align-items: center;
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
  height: 225px;
  width: 225px;

  img {
    height: 100%;
    width: 100%;

    object-fit: cover;
    image-rendering: auto;

    border-radius: 100%;
    border: 1px solid black;
    box-shadow: 0 5px 8px 0 var(--shadow), 0 6px 20px 0 var(--shadow);
  }
`;

export const FollowsSection = styled.div`
  min-width: 100px;
  display: flex;

  flex-direction: row;
  justify-content: flex-start;

  flex-wrap: wrap;
  text-align: center;
  p {
    width: 100%;
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

export const RightButtons = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  align-items: center;

  justify-content: center;
`;

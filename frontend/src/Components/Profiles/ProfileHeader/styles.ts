import styled from "styled-components";
import { ArrowBack } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  position: relative;
  background: var(--card);
  /* background: linear-gradient(
    to bottom,
    rgba(152, 101, 45, 1) 24%,
    rgba(129, 71, 21, 1) 90%
  ); */
  height: 50vh;

  width: 100%;
`;

export const NavFixed = styled.nav`
  position: fixed;

  height: 80;
  width: 100%;

  background-color: var(--card);
  z-index: 999;
`;

export const BackIcon = styled(ArrowBack)`
  top: 0;
  left: 0;

  width: 50px;
  height: 50px;

  color: #000;
`;

export const Image = styled.div`
  position: absolute;
  height: 200px;
  width: 200px;

  margin-top: 60px;
  margin-left: 50px;
  & img {
    height: 100%;
    width: 100%;

    border-radius: 100%;
    border: 1px solid black;
  }
`;

export const Username = styled.div`
  margin-top: 110px;
  text-align: center;
  font-size: 3.2rem;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

import styled from "styled-components";
import { Close } from "styled-icons/evaicons-solid";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  overflow: hidden;
`;

export const Header = styled.header`
  z-index: 10;
  position: absolute;

  display: flex;
  width: calc(100% - (15px * 2));
  height: 60px;

  align-items: center;
  margin: 15px;

  background: rgba(0, 0, 0, 0.5);
`;

export const CloseLeft = styled(Close)`
  width: 50px;
  height: 50px;

  align-self: center;
  cursor: pointer;
`;

export const Username = styled.span`
  margin-left: 15px;
  color: var(--white);
`;

export const Image = styled.img`
  position: absolute;
  object-fit: cover;
`;

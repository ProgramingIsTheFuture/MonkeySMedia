import styled from "styled-components";

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

export const Username = styled.span`
  margin-left: 15px;
  color: white;
`;

export const Image = styled.img`
  position: absolute;
  object-fit: cover;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Storie = styled.div`
  background: linear-gradient(45deg, red, yellow);

  border-radius: 100%;
  height: 25px;
  width: 25px;

  padding: 2px;
  margin: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

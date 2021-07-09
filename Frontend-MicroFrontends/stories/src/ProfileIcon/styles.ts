import styled from "styled-components";

export const Container = styled.div`
  padding: 2px;
  background: linear-gradient(
    200deg,
    $gradient-one 25%,
    $gradient-two 50%,
    $gradient-three 75%,
    $gradient-four 100%
  );
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    border: 2px solid purple;
    display: block;
    width: 60px;
    height: 60px;

    &:hover {
      cursor: pointer;
    }
  }
`;

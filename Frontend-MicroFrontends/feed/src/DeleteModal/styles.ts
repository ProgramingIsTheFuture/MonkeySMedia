import styled from "styled-components";

export const Container = styled.section`
  position: absolute;

  top: 0;
  left: 0;

  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.75);

  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  background-color: inherit;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const Items = styled.div`
  background-color: white;
  width: 50%;
  height: 25%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const BTNGroup = styled.div`
  button {
    margin: 2.5px;

    :first-child {
      background-color: green;
    }

    :last-child {
      background-color: red;
    }
  }
`;

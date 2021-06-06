import styled from "styled-components";

/*
 
 background: linear-gradient(45deg, red, yellow);

  border-radius: 100%;
  height: 60px;
  width: 60px;

  padding: 2px;
  margin: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

background: linear-gradient(45deg, red, yellow);

  border-radius: 100%;
  height: 60px;
  width: 60px;

  padding: 2px;
  margin: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

 */

export const Storie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0.5em;

  &:first-child {
    margin-left: 1em;
  }

  &:last-child {
    margin-right: 1em;
  }

  .accountName {
    font-size: 0.65em;
    margin: 0.4em;
  }
`;

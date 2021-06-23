import styled from "styled-components";

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

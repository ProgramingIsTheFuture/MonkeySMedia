import styled from "styled-components";

interface Props {
  liked: boolean;
}

export const Container = styled.div<Props>`
  margin-left: 10px;

  width: 60px;
  height: 60px;

  h3 {
    text-align: center;
    margin-left: 15px;
  }
  div {
    display: flex;
    align-items: center;
    ${(props) => (props.liked ? `fill: var(--primary);` : `fill: black;`)}

    svg {
      :hover {
        ${(props) => (props.liked ? `fill: black;` : `fill: var(--primary);`)}
      }
    }
  }
`;

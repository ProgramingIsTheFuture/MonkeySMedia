import styled from "styled-components";

interface Props {
  liked: boolean;
}

export const Container = styled.div<Props>`
  margin-left: 15px;
  cursor: pointer;

  width: 60px;
  height: 60px;

  div {
    display: flex;
    align-items: center;

    ${(props) => (props.liked ? `fill: var(--primary);` : `fill: black;`)}

    h3 {
      text-align: center;
      margin-left: 15px;

      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }

    svg {
      transition: 0.2s;
      :hover {
        ${(props) => (props.liked ? `fill: black;` : `fill: var(--primary);`)}
      }
    }
  }
`;

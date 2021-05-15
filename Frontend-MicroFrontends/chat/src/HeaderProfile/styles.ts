import styled from "styled-components";

export const Container = styled.header`
  height: 50px;
  z-index: 1;

  background-color: var(--nav-color);
  order: 0;

  top: 0;

  h3 {
	text-align: center;
	color: var(--white);
  }
}

  div {
    display: flex;
    height: 100%;

    flex-direction: row;

    color: var(--white);

    text-decoration: none;

    div {
      img {
        object-fit: cover;
        margin-right: 15px;
      }
    }
  }
`;

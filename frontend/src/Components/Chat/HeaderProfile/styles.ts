import styled from "styled-components";

export const Container = styled.header`
  height: 50px;
  z-index: 1;

  background-color: var(--nav-color);

  top: 0;
  position:absolute;

  h3 {
	text-align: center;
	color: var(--white);
  }
}

  a {
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

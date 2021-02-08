import styled from "styled-components";

export const Container = styled.header`
  height: 50px;

  background-color: var(--nav-color);

	top: 0;
    position: absolute;
    width: 100%;
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

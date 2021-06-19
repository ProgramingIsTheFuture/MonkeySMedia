import styled from "styled-components";

export const Container = styled.header`
  height: 65px;
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
	margin-left: 5px;

    color: var(--white);

    text-decoration: none;
	align-items: center;

    div {
      img {
        object-fit: cover;
        margin-right: 15px;
      }
    }
  }
`;

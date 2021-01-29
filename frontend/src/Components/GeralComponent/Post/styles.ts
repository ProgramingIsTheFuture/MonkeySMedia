import styled from "styled-components";

export const Container = styled.article`
  background: var(--card);
  margin: 5% 0 5% 0;

  width: 735px;
  min-width: 150px;
  min-height: 200px;

  border: 1px solid var(--shadow);

  @media screen and (max-width: 735px) {
    width: 100%;
    margin: 0;
    margin-top: 5%;
    margin-bottom: 5%;
	border-left: 0;
    border-right: 0;
  }
`;

export const UserSimpleInfo = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  div {
    margin-right: 15px;
  }

  a {
    color: black;
    text-decoration: none;

    div {
      margin-left: 15px;
      display: flex;
      align-items: center;
      text-align: left;
      margin-bottom: 7px;

      img {
        border: 1px solid var(--shadow);
        border-radius: 100%;
      }

      div {
        display: block;
        margin-left: 10px;
        p {
          font-size: 0.75em;
        }
      }
    }
  }
`;

export const Card = styled.div`
  width: 100%;
`;

export const CardTitle = styled.div`
  font-size: 2rem;
  text-align: center;
`;

export const CardContent = styled.div`
  text-align: center;
  font-size: 1.2rem;

  margin: 5px;
`;

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  img {
    object-fit: cover;

    max-height: 550px;
    width: 100%;
  }
`;

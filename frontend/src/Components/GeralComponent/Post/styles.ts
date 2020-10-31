import styled from "styled-components";

export const Container = styled.div`
  background: var(--card);
  margin: 15px;

  width: 735px;
  min-width: 150px;
  min-height: 150px;

  border: 1px solid var(--shadow);
`;

export const UserSimpleInfo = styled.div`
  margin-left: 15px;
  margin-top: 10px;

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
      display: flex;
      align-items: center;
      margin-bottom: 7px;

      img {
        border: 1px solid var(--shadow);
        border-radius: 100%;
      }

      span {
        margin-left: 10px;
      }
    }
  }
`;
export const DateTime = styled.div`
  margin-left: 15px;
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

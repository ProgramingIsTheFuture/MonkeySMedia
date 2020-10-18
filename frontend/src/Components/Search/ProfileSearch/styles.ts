import styled from "styled-components";

export const Container = styled.div`
  background: var(--card);
  margin: 15px;

  width: 735px;
  height: 300px;

  color: black;

  div {
    display: flex;
    flex-wrap: wrap;

    div {
      img {
        width: 130px;
        height: 130px;

        margin-top: -65px;

        border: 1px solid rgba(0, 0, 0, 0.09);
        border-radius: 100%;
      }
    }

    div {
      display: flex;
      flex-wrap: wrap;

      flex-direction: column;
      margin-left: 10px;
    }
  }
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 150px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const FullName = styled.div`
  margin-top: -20px;
  font-size: 1.8rem;
`;

export const Username = styled.div`
  margin-top: -35px;
  font-size: 1.4rem;
`;

export const ProfileDescription = styled.div`
  margin-top: -25px;
  font-size: 1rem;
`;

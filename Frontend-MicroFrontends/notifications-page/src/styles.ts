import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  h1 {
    text-align: center;
  }
`;

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 75%;
`;

export const ButtonGENERIC = styled.button`
  padding: 5px;

  background-color: var(--secundary);
  cursor: pointer;
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  border-top: 1px solid black;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  margin-right: 15px;
  cursor: pointer;

  div {
    height: 70px;

    display: flex;
    align-items: center;
  }

  span {
    font-size: 1.8rem;
  }
`;

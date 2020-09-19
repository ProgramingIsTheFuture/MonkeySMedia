import styled from "styled-components";

export const Container = styled.div`
  background: var(--card);
  margin: 15px;

  width: 735px;
`;

export const UserSimpleInfo = styled.div`
  margin-left: 15px;
  margin-top: 10px;
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
  margin: 15px;
  max-height: 725px;
  &img {
    max-width: 600px;
  }
`;

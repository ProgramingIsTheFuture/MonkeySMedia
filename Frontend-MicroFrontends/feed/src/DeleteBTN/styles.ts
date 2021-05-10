import styled from "styled-components";
import { Trash } from "styled-icons/heroicons-outline";

export const Container = styled.div``;

export const BTN = styled(Trash)`
  width: 25px;
  height: 25px;

  cursor: pointer;

  :hover {
    color: var(--trash-red);
  }
`;

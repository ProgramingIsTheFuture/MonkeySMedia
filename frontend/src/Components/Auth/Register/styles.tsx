import styled from "styled-components";

interface Props {
    error: boolean
}

export const Message = styled.h5<Props>`
  ${(props) => ((props.error) ? `display: block;` : `display: none;`)}
`;

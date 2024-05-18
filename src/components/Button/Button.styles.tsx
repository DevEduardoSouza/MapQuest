import styled from "styled-components";

export const ButtonStyled = styled.button<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: .8rem 3.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  font-size: 1.3rem;
  font-weight: 600;
`;

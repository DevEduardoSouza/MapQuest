import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string;
}

export const ControlsStyled = styled.div<ButtonProps>`
  max-width: 60px;
  height: 250px;

  z-index: 102;

  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.5rem;
`;

export const Button = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;

  background-color: ${(props) => props.backgroundColor};
  border: solid 3px #fff2bd;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 1.1rem;
    color: #fff;
  }
`;

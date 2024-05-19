import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  borderColor?: string;
}

export const ControlsStyled = styled.div<ButtonProps>`
  z-index: 101;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 2rem;
  padding-right: 4rem;
`;

export const LeftButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.5rem;
`;

export const RightButtons = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Button = styled.button<ButtonProps>`
  width: ${(props) => `${props.width || 40}px`};
  height: ${(props) => `${props.height || 40}px`};

  color: #fff;
  background-color: ${(props) => props.backgroundColor};
  border: solid 3px ${(props) => props.borderColor || "#fff2bd"};

  border-radius: ${(props) => `${props.borderRadius || 1}rem`};

  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 1.1rem;
    color: #fff;
  }
`;

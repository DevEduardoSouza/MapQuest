import styled from "styled-components";

export const ControlsStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 260px;
  max-width: 60px;
  height: 250px;
  background-color: red;
  z-index: 102;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 40px;
    height: 40px;

    background-color: #f68d21;
    border: solid 3px #fff2bd;
    border-radius: 1rem;
  }

  button i {
    font-size: 1.1rem;
    color: #fff;
  }
`;

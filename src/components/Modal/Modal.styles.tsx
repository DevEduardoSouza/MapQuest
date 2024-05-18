import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 150;

  width: 100vw;
  height: 100vh;

  background-color: #070707a2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalStyled = styled.div`
  width: 500px;
  background-color: #fffeff;
  color: #445266;
  border-radius: 1rem;
`;

export const ModalHeader = styled.div`
  border-radius: 1rem 1rem 0 0;
  background-color: #faf7fa;
  padding: 1rem;
  position: relative;
  text-align: center;

  button {
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    top: 16px;
    right: 10px;
  }
`;

export const ModalBody = styled.div`
  padding: 4rem;
  font-size: 1.4rem;
  text-align: center;
  color: #9fabb4;
`;

export const ModalFooter = styled.div`
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3d4577;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  z-index: 9999;
`;

export const LoaderContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

export const ImageBattle = styled.img`
  position: absolute;
  top: 55%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 60px; // Ajuste o tamanho conforme necessário
  height: 60px; // Ajuste o tamanho conforme necessário
`;

export const Loader = styled.div`
  border: 8px solid rgba(243, 243, 243, 0.014);
  border-radius: 50%;
  border-top: 8px solid #a2afe1;
  width: 150px;
  height: 150px;
  animation: spin 3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Text = styled.span`
  padding: 0.5rem 2rem;
  background-color: #333c64;
  border: 3px solid #2f3865;
  border-radius: 0.5rem;
  color: #fff;
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: #fdc76a;
  border: 3px solid #2f3865;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
`;

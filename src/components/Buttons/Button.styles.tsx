import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const Button = styled.button<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${(props) => props.bgColor || "#fff"};
  color: #43566d;

  font-size: 1rem;
  font-weight: 600;

  padding: 0.5rem 0;
  min-width: 120px;
  margin-bottom: 10px;

  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

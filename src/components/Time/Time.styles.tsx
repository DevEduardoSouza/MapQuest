import styled from "styled-components";

export const Container = styled.div`
  background-color: #313B4B;
  width: 70px;
  height: 70px;

  font-size: 0.9rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  position: absolute;
  top: 0;
  left: 50%;
  z-index: 102;
  margin-top: 0.5rem;

  border: 4px solid #FF6E6E;
  color: #fff;


  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

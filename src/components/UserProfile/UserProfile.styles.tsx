import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  z-index: 101;

  display: flex;
`;

export const LeftContent = styled.div`
  background-color: aliceblue;
  border-radius: 50%;
  position: relative;
  width: 50px;
  height: 50px;
  padding: 0.2rem;
  border: solid 1px #f1f1f1;

  img {
    width: 50px;
    border-radius: 50%;
    border: solid 1px #f1f1f1;
  }

  #user-level {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #f1f1f1;
    background-color: #22dd93;

    position: absolute;
    right: -10px;
    bottom: 8px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    padding: 0.3rem;

    font-size: 0.8rem;
  }
`;

export const RightContent = styled.div`
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  #life {
    background-color: red;
    width: 150px;
    height: 30px;
    border-radius: 0 0.4rem 0.8rem 0;
  }
  .user-name {
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 101;

  display: flex;
`;

export const LeftContent = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  padding: 0.2rem;

  border-radius: 1.2rem;
  border: solid 5px #f1f1f1;
  background-color: #53b0f9;
  z-index: 101;

  img {
    width: 100%;
    object-fit: cover;
  }

  #user-level {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    color: #f1f1f1;
    background-color: #508e60;

    position: absolute;
    right: -15px;
    bottom: 0px;
    border-radius: 50%;
    width: 15px;
    height: 15px;

    padding: 0.3rem;
    font-size: 0.8rem;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
`;

interface BoxProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  fontSize?: number;
}

export const RightContainer = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
  margin-left: -0.5rem;
`;

export const RightContent = styled.div<BoxProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: 0 0.8rem 0.8rem 0;

  background-color: #d9e0ea;
  border: solid 3px #feffff;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  .bar {
    position: absolute;
    left: 0;
    border-radius: 0 0.8rem 0.8rem 0;
    width: 100%;
    height: inherit;
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .number {
    z-index: 101;
    text-align: center;
    color: #feffff;
    font-size: ${(props) => `${props.fontSize}px`};
    font-weight: bolder;
    text-shadow: 1px 1px 0px #000;
  }

  i {
    position: absolute;
    right: -24px;

    color: #f8494c;
    font-size: 1rem;
    font-weight: bolder;
    text-shadow: 1px 1px 0px #00000060;
  }
`;

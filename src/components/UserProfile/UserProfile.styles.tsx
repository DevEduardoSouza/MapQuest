import styled from "styled-components";

interface LevelProps {
  color: string;
  width: number;
}

export const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: solid 4px #fff;
  background-color: #53b0f9;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  z-index: 101;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -8px;

  .name {
    font-weight: 500;
    font-size: 0.7rem;
    margin-left: 15px;
  }
`;

export const LevelNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #1cb7f9;
  color: #fff;

  width: 20px;
  height: 20px;

  border-radius: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;

  position: absolute;
  left: 50px;
  bottom: 5px;
  z-index: 102;
`;

export const Bar = styled.div`
  width: 120px;
  height: 23px;
  border-radius: 0 6px 8px 0;

  background-color: #e5e5e5;
  border: solid 3px #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  margin-top: 5px;
  position: relative;
  overflow: hidden;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  .number {
    position: relative;
    z-index: 101;
    color: #fff;
    font-weight: 600;
    font-size: 0.7rem;
  }
`;

export const Level = styled.div<LevelProps>`
  background-color: ${(props) => props.color};

  width: ${(props) => props.width}%;
  height: 100%;

  border-radius: 0 6px 8px 0;

  position: absolute;
  top: 0px;
  left: 0px;
`;

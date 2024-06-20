import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;

  background-color: #fff;
  padding: 0.8rem;
  border-radius: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 250px;

  transform: skew(-15deg);
  margin-left: 1rem;
  margin-top: 1.2rem;

  & * {
    transform: skew(5deg);
  }
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  background-color: #a8f6ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border: 4px solid #fff;

  position: absolute;
  top: -8px;
  left: -10px;
  transform: skew(12deg);
`;

export const AvatarImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const PlayerInfo = styled.div`
  flex-grow: 1;

  margin-left: 70px;

  .content-play-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const PlayerName = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

export const PlayerPoints = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #ff9900;
  display: flex;
  align-items: center;
`;

export const TrophyIcon = styled.div`
  img {
    transform: skew(-4deg);
    width: 15px;
    height: 15px;
  }
  margin-left: 5px;
`;

export const ProgressBarContainer = styled.div`
  background-color: #ffcbcd;
  border-radius: 5px;
  margin-top: 0.5rem;
  overflow: hidden;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 1px 1px #000;
`;

export const ProgressBar = styled.div<{ percentage: number }>`
  height: 20px;
  background-color: #fc6974;
  width: ${(props) => props.percentage}%;
  border-radius: 5px;
`;

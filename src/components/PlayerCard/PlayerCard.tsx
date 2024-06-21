import {
  Avatar,
  AvatarImage,
  Container,
  PlayerInfo,
  PlayerName,
  PlayerPoints,
  ProgressBar,
  ProgressBarContainer,
  TrophyIcon,
} from "./PlayerCard.styles";

import { IPlayerCard } from "../../types/PlayerCard.ts";

import IconTrophy from "../../assets/icons/trophy-icon.png";
import Bar from "../Bar/ProgressBar.tsx";

const PlayerCard = ({
  avatarUrl,
  name,
  points,
  progress,
  life,
}: IPlayerCard) => {
  return (
    <Container>
      <Avatar>
        <AvatarImage src={avatarUrl} alt="Player Avatar" />
      </Avatar>
      <PlayerInfo>
        <div className="content-play-info">
          <PlayerName>{name}</PlayerName>
          <PlayerPoints>
            {points}
            <TrophyIcon>
              <img src={IconTrophy} alt="" />
            </TrophyIcon>
          </PlayerPoints>
        </div>
        <ProgressBarContainer>
          <ProgressBar percentage={progress}>{life}</ProgressBar>
          {/* <Bar limit={500}  currentValue={progress} /> */}
        </ProgressBarContainer>
      </PlayerInfo>
    </Container>
  );
};

export default PlayerCard;

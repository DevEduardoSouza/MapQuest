import { Container, Icon, TimeNumber } from "./Time.styles.tsx";
import React, { useState, useEffect } from "react";
import moment from "moment";

import ShapeTimeImg from "../../assets/shape-img-time.png";

import BattleIcon from "../../assets/icons/battle-icon.png";
interface TimeProps {
  timeInit: number;
}

const Time: React.FC<TimeProps> = ({ timeInit }) => {
  const [timeLeft, setTimeLeft] = useState("00:00");

  const startCountdown = (time: number) => {
    const endTime = moment().add(time, "minutes");

    const updateCountdown = () => {
      const currentTime = moment();
      const diff = moment.duration(endTime.diff(currentTime));

      if (diff.asMilliseconds() <= 0) {
        clearInterval(intervalId);
        console.log("Contagem regressiva encerrada!");
      } else {
        setTimeLeft(formatCountdown(diff));
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return intervalId;
  };

  const formatCountdown = (duration: moment.Duration) => {
    return moment.utc(duration.asMilliseconds()).format("mm:ss");
  };

  useEffect(() => {
    const intervalId = startCountdown(timeInit);
    setTimeout(() => clearInterval(intervalId), timeInit * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [timeInit]);

  return (
    <Container srcImg={ShapeTimeImg} style={{ alignSelf: "center" }}>
      {" "}
      <Icon src={BattleIcon}></Icon>
      <TimeNumber>{timeLeft}</TimeNumber>
    </Container>
  );
};

export default Time;
